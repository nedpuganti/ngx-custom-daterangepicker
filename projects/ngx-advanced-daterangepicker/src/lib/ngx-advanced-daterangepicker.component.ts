import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import * as moment_ from 'moment';
import { MatDialog } from '@angular/material/dialog';

const moment = moment_;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-advanced-daterangepicker',
  templateUrl: './ngx-advanced-daterangepicker.component.html',
  styleUrls: ['./ngx-advanced-daterangepicker.component.scss'],
})
export class NgxAdvancedDaterangepickerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input()
  hideCalendar: boolean;

  @Input()
  selectDays:
    | 'today'
    | 'yesterday'
    | 'thisWeek'
    | 'lastWeek'
    | 'nextWeek'
    | 'last7Days'
    | 'next7Days'
    | 'thisMonth'
    | 'lastMonth'
    | 'nextMonth'
    | 'last30Days'
    | 'next30Days'
    | 'thisQuarter'
    | 'lastQuarter'
    | 'nextQuarter'
    | 'last90Days'
    | 'next90Days'
    | 'last12Months'
    | 'next12Months'
    | 'lastYear'
    | 'nextYear'
    | 'thisYear'
    | 'custom'
    | string = 'today';

  @Input()
  isoDateFormat: boolean;

  @Input()
  hideWeek: boolean;

  @Input()
  hideMonth: boolean;

  @Input()
  hideQuarter: boolean;

  @Input()
  hideYear: boolean;

  @Input()
  hideLast: boolean;

  @Input()
  showNext: boolean;

  // tslint:disable-next-line: no-output-rename
  @Output('on-change')
  dateRangeSelected: EventEmitter<any> = new EventEmitter<any>();

  selectedDate = { begin: '', end: '' };
  selectedType = {
    type: '',
    display: '',
  };

  appliedDate = { begin: '', end: '' };
  appliedType = {
    type: '',
    display: '',
  };

  today = new Date();

  selectionTypes: Array<{ type: string; display: string }> = [
    {
      type: 'today',
      display: 'Today',
    },
    {
      type: 'yesterday',
      display: 'Yesterday',
    },
    {
      type: 'thisWeek',
      display: 'This Week',
    },
    {
      type: 'lastWeek',
      display: 'Last Week',
    },
    {
      type: 'nextWeek',
      display: 'Next Week',
    },
    {
      type: 'last7Days',
      display: 'Last 7 Days',
    },
    {
      type: 'next7Days',
      display: 'Next 7 Days',
    },
    {
      type: 'thisMonth',
      display: 'This Month',
    },
    {
      type: 'lastMonth',
      display: 'Last Month',
    },
    {
      type: 'nextMonth',
      display: 'Next Month',
    },
    {
      type: 'last30Days',
      display: 'Last 30 Days',
    },
    {
      type: 'next30Days',
      display: 'Next 30 Days',
    },
    {
      type: 'thisQuarter',
      display: 'This Quarter',
    },
    {
      type: 'lastQuarter',
      display: 'Last Quarter',
    },
    {
      type: 'nextQuarter',
      display: 'Next Quarter',
    },
    {
      type: 'last90Days',
      display: 'Last 90 Days',
    },
    {
      type: 'next90Days',
      display: 'Next 90 Days',
    },
    {
      type: 'last12Months',
      display: 'Last 12 Months',
    },
    {
      type: 'next12Months',
      display: 'Next 12 Months',
    },
    {
      type: 'lastYear',
      display: 'Last Year',
    },
    {
      type: 'nextYear',
      display: 'Next Year',
    },
    {
      type: 'thisYear',
      display: 'This Year',
    },
    {
      type: 'custom',
      display: 'Custom',
    },
  ];

  ngOnInit() {
    this.onDaySelect(this.selectDays);
    this.dateSelected();
  }

  isActive(type) {
    return this.selectedType?.type === type;
  }

  onDaySelect(type) {
    const startOfToday = moment().startOf('day').format();
    const endOfToday = moment().endOf('day').format();

    if (type === 'today') {
      this.selectedDate.begin = startOfToday;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'yesterday') {
      const startOfYesterday = moment()
        .subtract(1, 'd')
        .startOf('day')
        .format();
      const endOfYesterday = moment().subtract(1, 'd').endOf('day').format();

      this.selectedDate.begin = startOfYesterday;
      this.selectedDate.end = endOfYesterday;
    }

    if (type === 'thisWeek') {
      const startOfWeek = moment().startOf('week').format();

      this.selectedDate.begin = startOfWeek;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'lastWeek') {
      const startOfLastWeek = moment()
        .subtract(1, 'w')
        .startOf('week')
        .format();
      const endOfLastWeek = moment().subtract(1, 'w').endOf('week').format();

      this.selectedDate.begin = startOfLastWeek;
      this.selectedDate.end = endOfLastWeek;
    }

    if (type === 'nextWeek') {
      const startOfNextWeek = moment().add(1, 'w').startOf('week').format();
      const endOfNextWeek = moment().add(1, 'w').endOf('week').format();

      this.selectedDate.begin = startOfNextWeek;
      this.selectedDate.end = endOfNextWeek;
    }

    if (type === 'last7Days') {
      const last7Days = moment().subtract(6, 'd').startOf('day').format();

      this.selectedDate.begin = last7Days;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'next7Days') {
      const next7Days = moment().add(6, 'd').endOf('day').format();

      this.selectedDate.begin = startOfToday;
      this.selectedDate.end = next7Days;
    }

    if (type === 'thisMonth') {
      const startOfMonth = moment().startOf('month').format();

      this.selectedDate.begin = startOfMonth;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'lastMonth') {
      const startOfLastMonth = moment()
        .subtract(1, 'M')
        .startOf('month')
        .format();
      const endOfLastMonth = moment().subtract(1, 'M').endOf('month').format();

      this.selectedDate.begin = startOfLastMonth;
      this.selectedDate.end = endOfLastMonth;
    }

    if (type === 'nextMonth') {
      const startOfNextMonth = moment().add(1, 'M').startOf('month').format();
      const endOfNextMonth = moment().add(1, 'M').endOf('month').format();

      this.selectedDate.begin = startOfNextMonth;
      this.selectedDate.end = endOfNextMonth;
    }

    if (type === 'last30Days') {
      const last30Days = moment().subtract(29, 'd').startOf('day').format();

      this.selectedDate.begin = last30Days;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'next30Days') {
      const next30Days = moment().add(29, 'd').endOf('day').format();

      this.selectedDate.begin = startOfToday;
      this.selectedDate.end = next30Days;
    }

    if (type === 'thisQuarter') {
      const startOfQuarter = moment().startOf('quarter').format();

      this.selectedDate.begin = startOfQuarter;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'lastQuarter') {
      const startOfLastQuarter = moment()
        .subtract(1, 'Q')
        .startOf('quarter')
        .format();
      const endOfLastQuarter = moment()
        .subtract(1, 'Q')
        .endOf('quarter')
        .format();

      this.selectedDate.begin = startOfLastQuarter;
      this.selectedDate.end = endOfLastQuarter;
    }

    if (type === 'nextQuarter') {
      const startOfNextQuarter = moment()
        .add(1, 'Q')
        .startOf('quarter')
        .format();
      const endOfNextQuarter = moment().add(1, 'Q').endOf('quarter').format();

      this.selectedDate.begin = startOfNextQuarter;
      this.selectedDate.end = endOfNextQuarter;
    }

    if (type === 'last90Days') {
      const last90Days = moment().subtract(89, 'd').startOf('day').format();

      this.selectedDate.begin = last90Days;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'next90Days') {
      const next90Days = moment().add(89, 'd').endOf('day').format();

      this.selectedDate.begin = startOfToday;
      this.selectedDate.end = next90Days;
    }

    if (type === 'last12Months') {
      const last12Months = moment().subtract(12, 'M').startOf('day').format();

      this.selectedDate.begin = last12Months;
      this.selectedDate.end = endOfToday;
    }

    if (type === 'next12Months') {
      const next12Months = moment().add(12, 'M').endOf('day').format();

      this.selectedDate.begin = startOfToday;
      this.selectedDate.end = next12Months;
    }

    if (type === 'lastYear') {
      const startOfLastYear = moment()
        .subtract(1, 'y')
        .startOf('year')
        .format();
      const endOfLastYear = moment().subtract(1, 'y').endOf('year').format();

      this.selectedDate.begin = startOfLastYear;
      this.selectedDate.end = endOfLastYear;
    }

    if (type === 'nextYear') {
      const startOfNextYear = moment().add(1, 'y').startOf('year').format();
      const endOfNextYear = moment().add(1, 'y').endOf('year').format();

      this.selectedDate.begin = startOfNextYear;
      this.selectedDate.end = endOfNextYear;
    }

    if (type === 'thisYear') {
      const startOfYear = moment().startOf('y').format();

      this.selectedDate.begin = startOfYear;
      this.selectedDate.end = endOfToday;
    }

    this.findSelection(type);
  }

  inlineRangeChange($event) {
    this.selectedDate.begin = moment($event.begin).startOf('day').format();
    this.selectedDate.end = moment($event.end).endOf('day').format();

    this.findSelection('custom');
  }

  findSelection(type) {
    const selectedType = this.selectionTypes.find((t) => t.type === type);
    this.selectedType = selectedType;

    if (this.hideCalendar) {
      this.dateSelected();
    }
  }

  dateSelected() {
    this.appliedDate = { ...this.selectedDate };
    this.appliedType = { ...this.selectedType };

    const dateObj = {
      startDate: '',
      endDate: '',
    };

    if (this.isoDateFormat) {
      dateObj.startDate = moment(this.selectedDate.begin).toISOString();
      dateObj.endDate = moment(this.selectedDate.end).toISOString();
    } else {
      dateObj.startDate = this.selectedDate.begin;
      dateObj.endDate = this.selectedDate.end;
    }

    // console.log('Sending data ' + JSON.stringify(data));

    this.dateRangeSelected.emit(dateObj);
    this.dialog.closeAll();
  }

  reset() {
    this.selectedDate = { ...this.appliedDate };
    this.selectedType = { ...this.appliedType };
  }

  openCheck(ev) {
    if (ev) {
      this.reset();
    }
  }

  openDateSelectDialog(showDatePicker): void {
    this.reset();
    this.dialog.open(showDatePicker, {
      width: '500px',
      height: 'auto',
      hasBackdrop: true,
      autoFocus: false,
      panelClass: 'daterangepicker-modal',
      backdropClass: 'modal-background',
    });
  }
}
