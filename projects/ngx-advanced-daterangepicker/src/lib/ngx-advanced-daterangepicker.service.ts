import { Injectable } from '@angular/core';
import moment from 'moment';
import {
  DateSelection,
  DateSelectionDisplayTypes,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionModeTypes,
  SelectionTypes,
} from './ngx-advanced-daterangepicker.interface';

@Injectable({
  providedIn: 'root',
})
export class NgxAdvancedDaterangepickerService {
  constructor() {}

  public getSelectedDate(
    type: DateSelectionTypes | null,
    showLastEndOf: boolean,
  ): DateSelection {
    let selectedDate: DateSelection = {
      startDate: '',
      endDate: '',
    };

    const startOfToday = moment().startOf('day').format();
    const endOfToday = moment().endOf('day').format();

    if (type === DateSelectionTypes.TODAY) {
      selectedDate.startDate = startOfToday;
      selectedDate.endDate = endOfToday;
    }

    if (type === DateSelectionTypes.YESTERDAY) {
      const startOfYesterday = moment()
        .subtract(1, 'd')
        .startOf('day')
        .format();
      const endOfYesterday = moment().subtract(1, 'd').endOf('day').format();

      selectedDate.startDate = startOfYesterday;
      selectedDate.endDate = endOfYesterday;
    }

    if (type === DateSelectionTypes.THIS_WEEK) {
      const startOfWeek = moment().startOf('week').format();

      selectedDate.startDate = startOfWeek;

      if (showLastEndOf) {
        selectedDate.endDate = moment().endOf('week').format();
      } else {
        selectedDate.endDate = endOfToday;
      }
    }

    if (type === DateSelectionTypes.LAST_WEEK) {
      const startOfLastWeek = moment()
        .subtract(1, 'w')
        .startOf('week')
        .format();
      const endOfLastWeek = moment().subtract(1, 'w').endOf('week').format();

      selectedDate.startDate = startOfLastWeek;
      selectedDate.endDate = endOfLastWeek;
    }

    if (type === DateSelectionTypes.NEXT_WEEK) {
      const startOfNextWeek = moment().add(1, 'w').startOf('week').format();
      const endOfNextWeek = moment().add(1, 'w').endOf('week').format();

      selectedDate.startDate = startOfNextWeek;
      selectedDate.endDate = endOfNextWeek;
    }

    if (type === DateSelectionTypes.LAST_7_DAYS) {
      const last7Days = moment().subtract(6, 'd').startOf('day').format();

      selectedDate.startDate = last7Days;
      selectedDate.endDate = endOfToday;
    }

    if (type === DateSelectionTypes.NEXT_7_DAYS) {
      const next7Days = moment().add(6, 'd').endOf('day').format();

      selectedDate.startDate = startOfToday;
      selectedDate.endDate = next7Days;
    }

    if (type === DateSelectionTypes.THIS_MONTH) {
      const startOfMonth = moment().startOf('month').format();

      selectedDate.startDate = startOfMonth;

      if (showLastEndOf) {
        selectedDate.endDate = moment().endOf('month').format();
      } else {
        selectedDate.endDate = endOfToday;
      }
    }

    if (type === DateSelectionTypes.LAST_MONTH) {
      const startOfLastMonth = moment()
        .subtract(1, 'M')
        .startOf('month')
        .format();
      const endOfLastMonth = moment().subtract(1, 'M').endOf('month').format();

      selectedDate.startDate = startOfLastMonth;
      selectedDate.endDate = endOfLastMonth;
    }

    if (type === DateSelectionTypes.NEXT_MONTH) {
      const startOfNextMonth = moment().add(1, 'M').startOf('month').format();
      const endOfNextMonth = moment().add(1, 'M').endOf('month').format();

      selectedDate.startDate = startOfNextMonth;
      selectedDate.endDate = endOfNextMonth;
    }

    if (type === DateSelectionTypes.LAST_30_DAYS) {
      const last30Days = moment().subtract(29, 'd').startOf('day').format();

      selectedDate.startDate = last30Days;
      selectedDate.endDate = endOfToday;
    }

    if (type === DateSelectionTypes.NEXT_30_DAYS) {
      const next30Days = moment().add(29, 'd').endOf('day').format();

      selectedDate.startDate = startOfToday;
      selectedDate.endDate = next30Days;
    }

    if (type === DateSelectionTypes.THIS_QUARTER) {
      const startOfQuarter = moment().startOf('quarter').format();

      selectedDate.startDate = startOfQuarter;

      if (showLastEndOf) {
        selectedDate.endDate = moment().endOf('quarter').format();
      } else {
        selectedDate.endDate = endOfToday;
      }
    }

    if (type === DateSelectionTypes.LAST_QUARTER) {
      const startOfLastQuarter = moment()
        .subtract(1, 'Q')
        .startOf('quarter')
        .format();
      const endOfLastQuarter = moment()
        .subtract(1, 'Q')
        .endOf('quarter')
        .format();

      selectedDate.startDate = startOfLastQuarter;
      selectedDate.endDate = endOfLastQuarter;
    }

    if (type === DateSelectionTypes.NEXT_QUARTER) {
      const startOfNextQuarter = moment()
        .add(1, 'Q')
        .startOf('quarter')
        .format();
      const endOfNextQuarter = moment().add(1, 'Q').endOf('quarter').format();

      selectedDate.startDate = startOfNextQuarter;
      selectedDate.endDate = endOfNextQuarter;
    }

    if (type === DateSelectionTypes.LAST_90_DAYS) {
      const last90Days = moment().subtract(89, 'd').startOf('day').format();

      selectedDate.startDate = last90Days;
      selectedDate.endDate = endOfToday;
    }

    if (type === DateSelectionTypes.NEXT_90_DAYS) {
      const next90Days = moment().add(89, 'd').endOf('day').format();

      selectedDate.startDate = startOfToday;
      selectedDate.endDate = next90Days;
    }

    if (type === DateSelectionTypes.LAST_12_MONTHS) {
      const last12Months = moment().subtract(12, 'M').startOf('day').format();

      selectedDate.startDate = last12Months;
      selectedDate.endDate = endOfToday;
    }

    if (type === DateSelectionTypes.NEXT_12_MONTHS) {
      const next12Months = moment().add(12, 'M').endOf('day').format();

      selectedDate.startDate = startOfToday;
      selectedDate.endDate = next12Months;
    }

    if (type === DateSelectionTypes.LAST_YEAR) {
      const startOfLastYear = moment()
        .subtract(1, 'y')
        .startOf('year')
        .format();
      const endOfLastYear = moment().subtract(1, 'y').endOf('year').format();

      selectedDate.startDate = startOfLastYear;
      selectedDate.endDate = endOfLastYear;
    }

    if (type === DateSelectionTypes.NEXT_YEAR) {
      const startOfNextYear = moment().add(1, 'y').startOf('year').format();
      const endOfNextYear = moment().add(1, 'y').endOf('year').format();

      selectedDate.startDate = startOfNextYear;
      selectedDate.endDate = endOfNextYear;
    }

    if (type === DateSelectionTypes.THIS_YEAR) {
      const startOfYear = moment().startOf('y').format();

      selectedDate.startDate = startOfYear;

      if (showLastEndOf) {
        selectedDate.endDate = moment().endOf('y').format();
      } else {
        selectedDate.endDate = endOfToday;
      }
    }

    return selectedDate;
  }

  public getSelectionTypes(): Array<SelectionTypes> {
    return [
      {
        type: DateSelectionTypes.TODAY,
        displayName: DateSelectionDisplayTypes.TODAY,
        mode: SelectionModeTypes.DAY,
        displayType: SelectionDisplayTypes.THIS,
      },
      {
        type: DateSelectionTypes.YESTERDAY,
        displayName: DateSelectionDisplayTypes.YESTERDAY,
        mode: SelectionModeTypes.DAY,
        displayType: SelectionDisplayTypes.THIS,
      },
      {
        type: DateSelectionTypes.THIS_WEEK,
        displayName: DateSelectionDisplayTypes.THIS_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.THIS,
        displayText: '(Sun-Today)',
      },
      {
        type: DateSelectionTypes.LAST_WEEK,
        displayName: DateSelectionDisplayTypes.LAST_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.LAST,
        displayText: '(Sun-Sat)',
      },
      {
        type: DateSelectionTypes.NEXT_WEEK,
        displayName: DateSelectionDisplayTypes.NEXT_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.NEXT,
        displayText: '(Sun-Sat)',
      },
      {
        type: DateSelectionTypes.LAST_7_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_7_DAYS,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_7_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_7_DAYS,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.THIS_MONTH,
        displayName: DateSelectionDisplayTypes.THIS_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.THIS,
      },
      {
        type: DateSelectionTypes.LAST_MONTH,
        displayName: DateSelectionDisplayTypes.LAST_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_MONTH,
        displayName: DateSelectionDisplayTypes.NEXT_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.LAST_30_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_30_DAYS,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_30_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_30_DAYS,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.THIS_QUARTER,
        displayName: DateSelectionDisplayTypes.THIS_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.THIS,
      },
      {
        type: DateSelectionTypes.LAST_QUARTER,
        displayName: DateSelectionDisplayTypes.LAST_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_QUARTER,
        displayName: DateSelectionDisplayTypes.NEXT_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.LAST_90_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_90_DAYS,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_90_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_90_DAYS,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.LAST_12_MONTHS,
        displayName: DateSelectionDisplayTypes.LAST_12_MONTHS,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_12_MONTHS,
        displayName: DateSelectionDisplayTypes.NEXT_12_MONTHS,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.LAST_YEAR,
        displayName: DateSelectionDisplayTypes.LAST_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.LAST,
      },
      {
        type: DateSelectionTypes.NEXT_YEAR,
        displayName: DateSelectionDisplayTypes.NEXT_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.NEXT,
      },
      {
        type: DateSelectionTypes.THIS_YEAR,
        displayName: DateSelectionDisplayTypes.THIS_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.THIS,
        displayText: '(Jan-Today)',
      },
      {
        type: DateSelectionTypes.CUSTOM,
        displayName: DateSelectionDisplayTypes.CUSTOM,
        mode: SelectionModeTypes.CUSTOM,
        displayType: null,
      },
    ];
  }
}
