import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

import {
  DateFormatTypes,
  DateSelection,
  DateSelectionDisplayTypes,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionModeTypes,
  SelectionTypes
} from './ngx-advanced-daterangepicker.interface';

@Injectable()
export class NgxAdvancedDaterangepickerService {
  public getStartAndEndOfDay(startDate: Date, endDate: Date): DateSelection {
    return {
      startDate: DateTime.fromJSDate(startDate).startOf('day').toJSDate(),
      endDate: DateTime.fromJSDate(endDate).endOf('day').toJSDate()
    };
  }

  public getSelectedDate(type: DateSelectionTypes | null, showLastEndOf: boolean): DateSelection {
    const startOfToday: DateTime = DateTime.now().startOf('day');
    const endOfToday: DateTime = DateTime.now().endOf('day');

    const selectedDate:
      | DateSelection
      | {
          startDate: DateTime;
          endDate: DateTime;
        } = {
      startDate: startOfToday,
      endDate: endOfToday
    };

    switch (type) {
      case DateSelectionTypes.TODAY:
        selectedDate.startDate = startOfToday;
        selectedDate.endDate = endOfToday;
        break;

      case DateSelectionTypes.YESTERDAY:
        selectedDate.startDate = DateTime.now().minus({ days: 1 }).startOf('day');
        selectedDate.endDate = DateTime.now().minus({ days: 1 }).endOf('day');
        break;

      case DateSelectionTypes.THIS_WEEK:
        selectedDate.startDate = DateTime.now().startOf('week').minus({ days: 1 });
        selectedDate.endDate = showLastEndOf ? DateTime.now().endOf('week').minus({ days: 1 }) : endOfToday;
        break;

      case DateSelectionTypes.LAST_WEEK:
        selectedDate.startDate = DateTime.now().minus({ weeks: 1 }).startOf('week').minus({ days: 1 });
        selectedDate.endDate = DateTime.now().minus({ weeks: 1 }).endOf('week').minus({ days: 1 });
        break;

      case DateSelectionTypes.NEXT_WEEK:
        selectedDate.startDate = DateTime.now().plus({ weeks: 1 }).startOf('week');
        selectedDate.endDate = DateTime.now().plus({ weeks: 1 }).endOf('week');
        break;

      case DateSelectionTypes.LAST_7_DAYS:
        selectedDate.startDate = DateTime.now().minus({ days: 6 }).startOf('day');
        selectedDate.endDate = endOfToday;
        break;

      case DateSelectionTypes.NEXT_7_DAYS:
        selectedDate.startDate = startOfToday;
        selectedDate.endDate = DateTime.now().plus({ days: 6 }).endOf('day');
        break;

      case DateSelectionTypes.THIS_MONTH:
        selectedDate.startDate = DateTime.now().startOf('month');
        selectedDate.endDate = showLastEndOf ? DateTime.now().endOf('month') : endOfToday;
        break;

      case DateSelectionTypes.LAST_MONTH:
        selectedDate.startDate = DateTime.now().minus({ months: 1 }).startOf('month');
        selectedDate.endDate = DateTime.now().minus({ months: 1 }).endOf('month');
        break;

      case DateSelectionTypes.NEXT_MONTH:
        selectedDate.startDate = DateTime.now().plus({ months: 1 }).startOf('month');
        selectedDate.endDate = DateTime.now().plus({ months: 1 }).endOf('month');
        break;

      case DateSelectionTypes.LAST_30_DAYS:
        selectedDate.startDate = DateTime.now().minus({ days: 29 }).startOf('day');
        selectedDate.endDate = endOfToday;
        break;

      case DateSelectionTypes.NEXT_30_DAYS:
        selectedDate.startDate = startOfToday;
        selectedDate.endDate = DateTime.now().plus({ days: 29 }).endOf('day');
        break;

      case DateSelectionTypes.THIS_QUARTER:
        selectedDate.startDate = DateTime.now().startOf('quarter');
        selectedDate.endDate = showLastEndOf ? DateTime.now().endOf('quarter') : endOfToday;
        break;

      case DateSelectionTypes.LAST_QUARTER:
        selectedDate.startDate = DateTime.now().minus({ quarters: 1 }).startOf('quarter');
        selectedDate.endDate = DateTime.now().minus({ quarters: 1 }).endOf('quarter');
        break;

      case DateSelectionTypes.NEXT_QUARTER:
        selectedDate.startDate = DateTime.now().plus({ quarters: 1 }).startOf('quarter');
        selectedDate.endDate = DateTime.now().plus({ quarters: 1 }).endOf('quarter');
        break;

      case DateSelectionTypes.LAST_90_DAYS:
        selectedDate.startDate = DateTime.now().minus({ days: 89 }).startOf('day');
        selectedDate.endDate = endOfToday;
        break;

      case DateSelectionTypes.NEXT_90_DAYS:
        selectedDate.startDate = startOfToday;
        selectedDate.endDate = DateTime.now().plus({ days: 89 }).endOf('day');
        break;

      case DateSelectionTypes.LAST_12_MONTHS:
        selectedDate.startDate = DateTime.now().minus({ months: 12 }).startOf('day');
        selectedDate.endDate = endOfToday;
        break;

      case DateSelectionTypes.NEXT_12_MONTHS:
        selectedDate.startDate = startOfToday;
        selectedDate.endDate = DateTime.now().plus({ months: 12 }).endOf('day');
        break;

      case DateSelectionTypes.LAST_YEAR:
        selectedDate.startDate = DateTime.now().minus({ years: 1 }).startOf('year');
        selectedDate.endDate = DateTime.now().minus({ years: 1 }).endOf('year');
        break;

      case DateSelectionTypes.NEXT_YEAR:
        selectedDate.startDate = DateTime.now().plus({ years: 1 }).startOf('year');
        selectedDate.endDate = DateTime.now().plus({ years: 1 }).endOf('year');
        break;

      case DateSelectionTypes.THIS_YEAR:
        selectedDate.startDate = DateTime.now().startOf('year');
        selectedDate.endDate = showLastEndOf ? DateTime.now().endOf('year') : endOfToday;
        break;

      default:
        break;
    }

    return {
      startDate: selectedDate.startDate.toJSDate(),
      endDate: selectedDate.endDate.toJSDate()
    } as DateSelection;
  }

  public formatSelectedDate(
    selectedDate: DateSelection,
    dateFormatType: DateFormatTypes | null,
    customDateFormat: string
  ): DateSelection<Date | string | null> {
    const { startDate, endDate } = {
      startDate: DateTime.fromJSDate(selectedDate.startDate as Date),
      endDate: DateTime.fromJSDate(selectedDate.endDate as Date)
    };

    switch (dateFormatType) {
      case 'ISO':
        return {
          startDate: startDate.toUTC().toISO(),
          endDate: endDate.toUTC().toISO()
        };
      case 'JS':
        return {
          startDate: startDate.toJSDate(),
          endDate: endDate.toJSDate()
        };
      case 'CUSTOM':
        return {
          startDate: startDate.toFormat(customDateFormat),
          endDate: endDate.toFormat(customDateFormat)
        };
      default:
        return {
          startDate: startDate.toFormat("yyyy-MM-dd'T'HH:mm:ssZZ"),
          endDate: endDate.toFormat("yyyy-MM-dd'T'HH:mm:ssZZ")
        };
    }
  }

  public getSelectionTypes(): Array<SelectionTypes> {
    return [
      {
        type: DateSelectionTypes.TODAY,
        displayName: DateSelectionDisplayTypes.TODAY,
        mode: SelectionModeTypes.DAY,
        displayType: SelectionDisplayTypes.THIS
      },
      {
        type: DateSelectionTypes.YESTERDAY,
        displayName: DateSelectionDisplayTypes.YESTERDAY,
        mode: SelectionModeTypes.DAY,
        displayType: SelectionDisplayTypes.THIS
      },
      {
        type: DateSelectionTypes.THIS_WEEK,
        displayName: DateSelectionDisplayTypes.THIS_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.THIS,
        displayText: '(Sun-Today)'
      },
      {
        type: DateSelectionTypes.LAST_WEEK,
        displayName: DateSelectionDisplayTypes.LAST_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.LAST,
        displayText: '(Sun-Sat)'
      },
      {
        type: DateSelectionTypes.NEXT_WEEK,
        displayName: DateSelectionDisplayTypes.NEXT_WEEK,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.NEXT,
        displayText: '(Sun-Sat)'
      },
      {
        type: DateSelectionTypes.LAST_7_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_7_DAYS,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_7_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_7_DAYS,
        mode: SelectionModeTypes.WEEK,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.THIS_MONTH,
        displayName: DateSelectionDisplayTypes.THIS_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.THIS
      },
      {
        type: DateSelectionTypes.LAST_MONTH,
        displayName: DateSelectionDisplayTypes.LAST_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_MONTH,
        displayName: DateSelectionDisplayTypes.NEXT_MONTH,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.LAST_30_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_30_DAYS,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_30_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_30_DAYS,
        mode: SelectionModeTypes.MONTH,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.THIS_QUARTER,
        displayName: DateSelectionDisplayTypes.THIS_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.THIS
      },
      {
        type: DateSelectionTypes.LAST_QUARTER,
        displayName: DateSelectionDisplayTypes.LAST_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_QUARTER,
        displayName: DateSelectionDisplayTypes.NEXT_QUARTER,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.LAST_90_DAYS,
        displayName: DateSelectionDisplayTypes.LAST_90_DAYS,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_90_DAYS,
        displayName: DateSelectionDisplayTypes.NEXT_90_DAYS,
        mode: SelectionModeTypes.QUARTER,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.LAST_12_MONTHS,
        displayName: DateSelectionDisplayTypes.LAST_12_MONTHS,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_12_MONTHS,
        displayName: DateSelectionDisplayTypes.NEXT_12_MONTHS,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.LAST_YEAR,
        displayName: DateSelectionDisplayTypes.LAST_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.LAST
      },
      {
        type: DateSelectionTypes.NEXT_YEAR,
        displayName: DateSelectionDisplayTypes.NEXT_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.NEXT
      },
      {
        type: DateSelectionTypes.THIS_YEAR,
        displayName: DateSelectionDisplayTypes.THIS_YEAR,
        mode: SelectionModeTypes.YEAR,
        displayType: SelectionDisplayTypes.THIS,
        displayText: '(Jan-Today)'
      },
      {
        type: DateSelectionTypes.CUSTOM,
        displayName: DateSelectionDisplayTypes.CUSTOM,
        mode: SelectionModeTypes.CUSTOM,
        displayType: null
      }
    ];
  }
}
