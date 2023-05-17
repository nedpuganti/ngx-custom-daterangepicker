import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MatRangeDateSelectionModel,
  MatDatepickerModule,
  MAT_DATE_RANGE_SELECTION_STRATEGY
} from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import moment from 'moment';
import {
  CustomDateSelection,
  DateSelection,
  DateSelectionDisplayTypes,
  SelectionModeTypes,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionTypes
} from './ngx-advanced-daterangepicker.interface';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, ThemePalette } from '@angular/material/core';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';
import { MatDividerModule } from '@angular/material/divider';
import { NgClass, NgFor, NgIf, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'ngx-advanced-daterangepicker',
  templateUrl: './ngx-advanced-daterangepicker.component.html',
  styleUrls: ['./ngx-advanced-daterangepicker.component.scss'],
  standalone: true,
  imports: [MatButtonModule, NgClass, NgFor, NgIf, MatDividerModule, MatDatepickerModule, MatDialogModule, DatePipe],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy
    },
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
    NgxAdvancedDaterangepickerService
  ]
})
export class NgxAdvancedDaterangepickerComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dRef!: MatDialogRef<any>;

  private dialog = inject(MatDialog);
  private readonly selectionModel = inject(MatRangeDateSelectionModel<Date>);
  private readonly selectionStrategy = inject(DefaultMatCalendarRangeStrategy<Date>);
  private ngxAdvancedDaterangepickerService = inject(NgxAdvancedDaterangepickerService);

  @Input()
  width = '500px';

  @Input()
  hideCalendar!: boolean;

  @Input()
  selectDays: DateSelectionTypes = DateSelectionTypes.TODAY;

  @Input()
  isoDateFormat!: boolean;

  @Input()
  hideWeek!: boolean;

  @Input()
  hideMonth!: boolean;

  @Input()
  hideQuarter!: boolean;

  @Input()
  hideYear!: boolean;

  @Input()
  hideLast!: boolean;

  @Input()
  showNext!: boolean;

  // To show last end of day|week|quarter|year in this
  @Input()
  showLastEndOf!: boolean;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix, @angular-eslint/no-output-rename
  @Output('on-change')
  dateRangeSelected: EventEmitter<CustomDateSelection> = new EventEmitter<CustomDateSelection>();

  @Input()
  customDate: CustomDateSelection = {
    startDate: '',
    endDate: ''
  };

  public selectedDateSelected: DateRange<Date | moment.Moment | null> = new DateRange<Date>(null, null);

  public selectedDate: DateSelection = {
    startDate: '',
    endDate: ''
  };
  public selectedType: SelectionTypes = {
    type: null,
    displayName: null,
    mode: null,
    displayType: null
  };

  public appliedDate: DateSelection = {
    startDate: '',
    endDate: ''
  };
  public appliedType: SelectionTypes = {
    type: null,
    displayName: null,
    mode: null,
    displayType: null
  };

  public selectionTypes: Array<SelectionTypes> = [];

  private initialized = false;
  public readonly dateSelectionTypes = DateSelectionTypes;
  public readonly dateSelectionDisplayTypes = DateSelectionDisplayTypes;
  public readonly primaryColor: ThemePalette = 'primary';

  public readonly today = new Date();

  ngOnInit() {
    this.loadDateSelections();

    this.onDaySelect(this.selectDays);
    this.dateSelected();
  }

  loadDateSelections(): void {
    const selection = this.ngxAdvancedDaterangepickerService.getSelectionTypes();

    this.selectionTypes = selection.filter((type) => {
      if (this.showLastEndOf) {
        if (type.type === DateSelectionTypes.THIS_WEEK) {
          type.displayText = '(Sun-Sat)';
        }

        if (type.type === DateSelectionTypes.THIS_YEAR) {
          type.displayText = '(Jan-Dec)';
        }
      }

      if (
        (type.displayType === SelectionDisplayTypes.NEXT && !this.showNext) ||
        (type.displayType === SelectionDisplayTypes.LAST && this.hideLast)
      ) {
        return false;
      }

      if (this.hideWeek) {
        return type.mode !== SelectionModeTypes.WEEK;
      }

      if (this.hideMonth) {
        return type.mode !== SelectionModeTypes.MONTH;
      }

      if (this.hideQuarter) {
        return type.mode !== SelectionModeTypes.QUARTER;
      }

      if (this.hideYear) {
        return type.mode !== SelectionModeTypes.YEAR;
      }

      if (this.hideCalendar) {
        return type.mode !== SelectionModeTypes.CUSTOM;
      }

      return type;
    });
  }

  isActive(type: DateSelectionTypes | null): boolean {
    return this.selectedType?.type === type;
  }

  onDaySelect(type: DateSelectionTypes | null): void {
    if (type === DateSelectionTypes.CUSTOM) {
      if (this.customDate.startDate && this.customDate.endDate) {
        const startOfDay = moment(this.customDate.startDate)
          .startOf('day')
          .format();
        const endOfDay = moment(this.customDate.endDate).endOf('day').format();

        this.selectedDate = { startDate: startOfDay, endDate: endOfDay };
      } else {
        this.customDate = JSON.parse(JSON.stringify(this.selectedDate));
      }
    } else {
      this.customDate = {
        startDate: '',
        endDate: '',
      };

      this.selectedDate =
        this.ngxAdvancedDaterangepickerService.getSelectedDate(
          type,
          this.showLastEndOf,
        );
    }

    this.loadDateRangeCalendar();
    this.findSelection(type);
  }

  loadDateRangeCalendar(): void {
    this.selectedDateSelected = new DateRange(
      moment(this.selectedDate.startDate).startOf('day'),
      moment(this.selectedDate.endDate).endOf('day')
    );
  }

  inlineRangeChange(date: Date): void {
    const selection = this.selectionModel.selection;

    const newSelection = this.selectionStrategy.selectionFinished(date, selection);

    this.selectionModel.updateSelection(newSelection, this);
    this.selectedDateSelected = new DateRange<Date>(newSelection.start, newSelection.end);

    if (this.selectionModel.isComplete()) {
      this.selectedDate.startDate = moment(newSelection.start).startOf('day').format();
      this.selectedDate.endDate = moment(newSelection.end).endOf('day').format();
      this.findSelection(DateSelectionTypes.CUSTOM);
    }
  }

  findSelection(type: DateSelectionTypes | null) {
    const selectedType = this.selectionTypes.find((t) => t.type === type);

    if (selectedType) this.selectedType = selectedType;

    if (this.hideCalendar) {
      this.dateSelected();
    }
  }

  dateSelected() {
    this.appliedDate = { ...this.selectedDate };
    this.appliedType = { ...this.selectedType };

    const dateObj: CustomDateSelection = {
      startDate: '',
      endDate: ''
    };

    if (this.isoDateFormat) {
      dateObj.startDate = moment(this.selectedDate.startDate).toISOString();
      dateObj.endDate = moment(this.selectedDate.endDate).toISOString();
    } else {
      dateObj.startDate = this.selectedDate.startDate;
      dateObj.endDate = this.selectedDate.endDate;
    }

    this.dateRangeSelected.emit(dateObj);

    if (this.initialized) {
      this.dRef?.close();
    } else {
      this.initialized = true;
    }
  }

  reset() {
    this.selectedDate = { ...this.appliedDate };
    this.selectedType = { ...this.appliedType };

    this.loadDateRangeCalendar();
  }

  openDateSelectDialog(showDatePicker: any): void {
    this.reset();
    this.dRef = this.dialog.open(showDatePicker, {
      width: this.width,
      height: 'auto',
      hasBackdrop: true,
      autoFocus: false,
      panelClass: 'daterangepicker-modal',
      backdropClass: 'modal-background'
    });
  }
}
