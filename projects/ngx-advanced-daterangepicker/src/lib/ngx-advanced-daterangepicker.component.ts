import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MatRangeDateSelectionModel,
} from '@angular/material/datepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';
import {
  CustomDateSelection,
  DateSelection,
  DateSelectionDisplayTypes,
  SelectionModeTypes,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionTypes,
} from './ngx-advanced-daterangepicker.interface';
import { ThemePalette } from '@angular/material/core';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

@Component({
  selector: 'ngx-advanced-daterangepicker',
  templateUrl: './ngx-advanced-daterangepicker.component.html',
  styleUrls: ['./ngx-advanced-daterangepicker.component.scss'],
})
export class NgxAdvancedDaterangepickerComponent implements OnInit {
  dRef!: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog,
    private readonly selectionModel: MatRangeDateSelectionModel<Date>,
    private readonly selectionStrategy: DefaultMatCalendarRangeStrategy<Date>,
    private ngxAdvancedDaterangepickerService: NgxAdvancedDaterangepickerService,
  ) {}

  @Input()
  width: string = '500px';

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

  // tslint:disable-next-line: no-output-rename
  @Output('on-change')
  dateRangeSelected: EventEmitter<CustomDateSelection> =
    new EventEmitter<CustomDateSelection>();

  @Input()
  customDate: CustomDateSelection = {
    startDate: '',
    endDate: '',
  };

  public selectedDateSelected: DateRange<Date | moment.Moment | null> =
    new DateRange<Date>(null, null);

  public selectedDate: DateSelection = {
    startDate: '',
    endDate: '',
  };
  public selectedType: SelectionTypes = {
    type: null,
    display: null,
    mode: null,
    displayType: null,
  };

  public appliedDate: DateSelection = {
    startDate: '',
    endDate: '',
  };
  public appliedType: SelectionTypes = {
    type: null,
    display: null,
    mode: null,
    displayType: null,
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
    const selection =
      this.ngxAdvancedDaterangepickerService.getSelectionTypes();

    this.selectionTypes = selection.filter((type) => {
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
      const startOfDay = moment(this.customDate.startDate)
        .startOf('day')
        .format();
      const endOfDay = moment(this.customDate.endDate).endOf('day').format();

      this.selectedDate.startDate = startOfDay;
      this.selectedDate.endDate = endOfDay;
    } else {
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
      moment(this.selectedDate.endDate).endOf('day'),
    );
  }

  inlineRangeChange(date: Date): void {
    const selection = this.selectionModel.selection;

    const newSelection = this.selectionStrategy.selectionFinished(
      date,
      selection,
    );

    this.selectionModel.updateSelection(newSelection, this);
    this.selectedDateSelected = new DateRange<Date>(
      newSelection.start,
      newSelection.end,
    );

    if (this.selectionModel.isComplete()) {
      this.selectedDate.startDate = moment(newSelection.start)
        .startOf('day')
        .format();
      this.selectedDate.endDate = moment(newSelection.end)
        .endOf('day')
        .format();
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
      endDate: '',
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
      backdropClass: 'modal-background',
    });
  }
}
