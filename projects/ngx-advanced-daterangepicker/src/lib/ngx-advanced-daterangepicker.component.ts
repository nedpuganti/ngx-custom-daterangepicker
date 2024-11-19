import { DatePipe, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnChanges,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  SimpleChanges,
  TemplateRef,
  viewChild,
  WritableSignal
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatCalendar,
  MatRangeDateSelectionModel
} from '@angular/material/datepicker';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';

import {
  DateFormatTypes,
  DateSelection,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionModeTypes,
  SelectionTypes
} from './ngx-advanced-daterangepicker.interface';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

@Component({
  selector: 'ngx-advanced-daterangepicker',
  templateUrl: './ngx-advanced-daterangepicker.component.html',
  styleUrls: ['./ngx-advanced-daterangepicker.component.scss'],
  imports: [DatePipe, MatButton, MatCalendar, MatDivider, MatDialogClose, MatDialogActions, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
    { provide: DateAdapter, useClass: NativeDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: DefaultMatCalendarRangeStrategy },
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
    NgxAdvancedDaterangepickerService
  ]
})
export class NgxAdvancedDaterangepickerComponent implements OnInit, OnChanges {
  private dRef!: MatDialogRef<unknown>;

  readonly dialog: MatDialog = inject(MatDialog);
  readonly selectionModel: MatRangeDateSelectionModel<Date> = inject(MatRangeDateSelectionModel<Date>);
  readonly selectionStrategy: DefaultMatCalendarRangeStrategy<Date> = inject(DefaultMatCalendarRangeStrategy<Date>);
  readonly dateRangePickerService: NgxAdvancedDaterangepickerService = inject(NgxAdvancedDaterangepickerService);

  calendar: Signal<MatCalendar<Date> | undefined> = viewChild('calendar', { read: MatCalendar });

  width: InputSignal<string> = input('500px');

  selectDays: InputSignal<DateSelectionTypes> = input<DateSelectionTypes>(DateSelectionTypes.TODAY);

  customDateFormat: InputSignal<string> = input<string>('');

  dateFormatType: InputSignal<DateFormatTypes | null> = input<DateFormatTypes | null>(null);

  inlineDatePicker: InputSignal<boolean> = input<boolean>(false);

  hideCalendar: InputSignal<boolean> = input<boolean>(false);

  hideWeek: InputSignal<boolean> = input<boolean>(false);

  hideMonth: InputSignal<boolean> = input<boolean>(false);

  hideQuarter: InputSignal<boolean> = input<boolean>(false);

  hideYear: InputSignal<boolean> = input<boolean>(false);

  hideLast: InputSignal<boolean> = input<boolean>(false);

  showNext: InputSignal<boolean> = input<boolean>(false);

  disableMaxDate: InputSignal<boolean> = input<boolean>(false);

  autoApply: InputSignal<boolean> = input<boolean>(false);

  /**
   *
   * @type {InputSignal<boolean>}
   * @memberof NgxAdvancedDaterangepickerComponent
   * @description To show last end of week or year from today to current week or year
   * @default false
   * @example
   * 1. If showLastEndOfPeriod is true, then the display text will be like this:
   *    - This Week (Sun-Sat)
   *    - This Year (Jan-Dec)
   * 2. If showLastEndOfPeriod is false, then the display text will be like this:
   *    - This Week (Sun-Today)
   *    - This Year (Jan-Today)
   */
  showLastEndOfThisPeriod: InputSignal<boolean> = input<boolean>(false);

  customDate: ModelSignal<DateSelection> = model<DateSelection>({ startDate: null, endDate: null });

  dateRangeSelected: OutputEmitterRef<DateSelection<Date | string | null>> = output<DateSelection>();
  appliedTypeSelected: OutputEmitterRef<SelectionTypes> = output<SelectionTypes>();

  public selectedDateSelected: WritableSignal<DateRange<Date | null>> = signal(new DateRange<Date>(null, null));

  public selectedDate: WritableSignal<DateSelection> = signal({ startDate: null, endDate: null });
  public selectedType: WritableSignal<SelectionTypes> = signal({ type: null, displayName: null, mode: null, displayType: null });

  public appliedDate: WritableSignal<DateSelection> = signal({ startDate: null, endDate: null });
  public appliedType: WritableSignal<SelectionTypes> = signal({ type: null, displayName: null, mode: null, displayType: null });

  public selectionTypes: WritableSignal<SelectionTypes[]> = signal([]);

  private initialized: WritableSignal<boolean> = signal(false);

  public isButtonVisible: Signal<boolean> = computed((): boolean => this.autoApply() || this.hideCalendar() || this.inlineDatePicker());
  public maxDate: Signal<Date | null> = computed((): Date | null =>
    !(this.disableMaxDate() || this.showNext() || this.showLastEndOfThisPeriod()) ? new Date() : null
  );

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changed: boolean = Object.values(changes).some((change) => !change.firstChange);

    if (changed) {
      this.init();
    }
  }

  init(): void {
    this.loadDateSelections();
    this.onDaySelect(this.selectDays());

    if (!this.inlineDatePicker()) {
      this.dateSelected();
    }
  }

  loadDateSelections(): void {
    const selection: SelectionTypes[] = this.dateRangePickerService.getSelectionTypes().filter((type: SelectionTypes) => {
      if (this.showLastEndOfThisPeriod()) {
        if (type.type === DateSelectionTypes.THIS_WEEK) {
          type.displayText = '(Sun-Sat)';
        }
        if (type.type === DateSelectionTypes.THIS_YEAR) {
          type.displayText = '(Jan-Dec)';
        }
      }

      // Hide the selection type if the condition is true
      return !(
        (type.displayType === SelectionDisplayTypes.NEXT && !this.showNext()) ||
        (type.displayType === SelectionDisplayTypes.LAST && this.hideLast()) ||
        (type.mode === SelectionModeTypes.WEEK && this.hideWeek()) ||
        (type.mode === SelectionModeTypes.MONTH && this.hideMonth()) ||
        (type.mode === SelectionModeTypes.QUARTER && this.hideQuarter()) ||
        (type.mode === SelectionModeTypes.YEAR && this.hideYear()) ||
        (type.mode === SelectionModeTypes.CUSTOM && this.hideCalendar())
      );
    });

    this.selectionTypes.set(selection);
  }

  trackByIdentity = (index: number, type: SelectionTypes) => type.type;

  onDaySelect(type: DateSelectionTypes | null): void {
    if (type === DateSelectionTypes.CUSTOM) {
      const _customDate: DateSelection = this.customDate();
      if (_customDate.startDate && _customDate.endDate) {
        const { startDate, endDate } = this.dateRangePickerService.getStartAndEndOfDay(_customDate.startDate, _customDate.endDate);
        this.selectedDate.set({ startDate, endDate });
      } else {
        this.customDate.set(structuredClone(this.selectedDate()));
      }
    } else {
      this.customDate.set({ startDate: null, endDate: null });

      this.selectedDate.set(this.dateRangePickerService.getSelectedDate(type, this.showLastEndOfThisPeriod()));
    }

    this.loadDateRangeCalendar();
    this.findSelection(type);
  }

  loadDateRangeCalendar(): void {
    const selectedDate: DateSelection = this.selectedDate();
    const { startDate, endDate } = this.dateRangePickerService.getStartAndEndOfDay(
      selectedDate.startDate as Date,
      selectedDate.endDate as Date
    );

    this.updateCalendarSelectedRange(startDate as Date, endDate as Date);
  }

  inlineRangeChange(date: Date): void {
    const selection: DateRange<Date> = this.selectionModel.selection;

    const updatedDateRange: DateRange<Date> = this.selectionStrategy.selectionFinished(date, selection);

    this.selectionModel.updateSelection(updatedDateRange, this);
    this.updateCalendarSelectedRange(updatedDateRange.start as Date, updatedDateRange.end as Date);

    if (this.selectionModel.isComplete()) {
      const { startDate, endDate } = this.dateRangePickerService.getStartAndEndOfDay(
        updatedDateRange.start as Date,
        updatedDateRange.end as Date
      );
      this.selectedDate.set({ startDate, endDate });
      this.findSelection(DateSelectionTypes.CUSTOM);
    }
  }

  updateCalendarSelectedRange(startDate: Date, endDate: Date): void {
    this.selectedDateSelected.set(new DateRange<Date | null>(startDate, endDate));
    this.calendar()?._goToDateInView(endDate, 'month');
  }

  findSelection(type: DateSelectionTypes | null): void {
    this.selectionTypes().forEach((types: SelectionTypes): void => {
      if (types.type === type) {
        types.isActive = true;
        this.selectedType.set(types);
      } else {
        types.isActive = false;
      }
    });

    if (this.isButtonVisible()) {
      this.dateSelected();
    }
  }

  dateSelected(): void {
    const selectedDate: DateSelection = this.selectedDate();
    this.appliedDate.set(structuredClone(selectedDate));
    this.appliedType.set(structuredClone(this.selectedType()));

    const dateObj: DateSelection<string | Date | null> = this.dateRangePickerService.formatSelectedDate(
      selectedDate,
      this.dateFormatType(),
      this.customDateFormat()
    );

    this.appliedTypeSelected.emit(this.appliedType());
    this.dateRangeSelected.emit(dateObj);

    if (this.initialized()) {
      this.dRef?.close();
    } else {
      this.initialized.set(true);
    }
  }

  reset(): void {
    this.selectedDate.set(structuredClone(this.appliedDate()));
    this.selectedType.set(structuredClone(this.appliedType()));

    this.loadDateRangeCalendar();
  }

  openDateSelectDialog(showDatePicker: TemplateRef<unknown>): void {
    this.reset();
    this.dRef = this.dialog.open(showDatePicker, {
      width: this.width(),
      height: 'auto',
      hasBackdrop: true,
      disableClose: this.isButtonVisible(),
      autoFocus: false,
      panelClass: 'daterangepicker-modal'
    });
  }
}
