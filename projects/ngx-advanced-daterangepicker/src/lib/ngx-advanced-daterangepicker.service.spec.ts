import { TestBed } from '@angular/core/testing';
import { DateTime } from 'luxon';

import {
  DateFormatTypes,
  DateSelection,
  DateSelectionDisplayTypes,
  DateSelectionTypes,
  SelectionDisplayTypes,
  SelectionModeTypes
} from './ngx-advanced-daterangepicker.interface';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

describe('NgxAdvancedDaterangepickerService', () => {
  let service: NgxAdvancedDaterangepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAdvancedDaterangepickerService]
    });
    service = TestBed.inject(NgxAdvancedDaterangepickerService);
  });

  describe('getStartAndEndOfDay', () => {
    it('should return start and end of the same day', () => {
      const startDate = new Date(2023, 9, 10); // October 10, 2023
      const endDate = new Date(2023, 9, 10); // October 10, 2023
      const result: DateSelection = service.getStartAndEndOfDay(startDate, endDate);

      expect(result.startDate).toEqual(DateTime.fromJSDate(startDate).startOf('day').toJSDate());
      expect(result.endDate).toEqual(DateTime.fromJSDate(endDate).endOf('day').toJSDate());
    });

    it('should return start and end of different days', () => {
      const startDate = new Date(2023, 9, 10); // October 10, 2023
      const endDate = new Date(2023, 9, 11); // October 11, 2023
      const result: DateSelection = service.getStartAndEndOfDay(startDate, endDate);

      expect(result.startDate).toEqual(DateTime.fromJSDate(startDate).startOf('day').toJSDate());
      expect(result.endDate).toEqual(DateTime.fromJSDate(endDate).endOf('day').toJSDate());
    });

    it('should handle start date later than end date', () => {
      const startDate = new Date(2023, 9, 11); // October 11, 2023
      const endDate = new Date(2023, 9, 10); // October 10, 2023
      const result: DateSelection = service.getStartAndEndOfDay(startDate, endDate);

      expect(result.startDate).toEqual(DateTime.fromJSDate(startDate).startOf('day').toJSDate());
      expect(result.endDate).toEqual(DateTime.fromJSDate(endDate).endOf('day').toJSDate());
    });

    it('should handle invalid dates', () => {
      const startDate = new Date();
      const endDate = new Date();
      const result: DateSelection = service.getStartAndEndOfDay(startDate, endDate);

      expect(result.startDate).not.toBeNull();
      expect(result.endDate).not.toBeNull();
    });
  });

  describe('getStartAndEndOfDay', () => {
    it("should return today's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.TODAY, false);
      const startOfToday = DateTime.now().startOf('day').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfToday);
      expect(result.endDate).toEqual(endOfToday);
    });

    it("should return yesterday's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.YESTERDAY, false);
      const startOfYesterday = DateTime.now().minus({ days: 1 }).startOf('day').toJSDate();
      const endOfYesterday = DateTime.now().minus({ days: 1 }).endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfYesterday);
      expect(result.endDate).toEqual(endOfYesterday);
    });

    it("should return this week's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.THIS_WEEK, false);
      const startOfWeek = DateTime.now().startOf('week').minus({ days: 1 }).toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfWeek);
      expect(result.endDate).toEqual(endOfToday);
    });

    it("should return last week's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_WEEK, false);
      const startOfLastWeek = DateTime.now().minus({ weeks: 1 }).startOf('week').minus({ days: 1 }).toJSDate();
      const endOfLastWeek = DateTime.now().minus({ weeks: 1 }).endOf('week').minus({ days: 1 }).toJSDate();
      expect(result.startDate).toEqual(startOfLastWeek);
      expect(result.endDate).toEqual(endOfLastWeek);
    });

    it("should return next week's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_WEEK, false);
      const startOfNextWeek = DateTime.now().plus({ weeks: 1 }).startOf('week').toJSDate();
      const endOfNextWeek = DateTime.now().plus({ weeks: 1 }).endOf('week').toJSDate();
      expect(result.startDate).toEqual(startOfNextWeek);
      expect(result.endDate).toEqual(endOfNextWeek);
    });

    it('should return last 7 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_7_DAYS, false);
      const startOfLast7Days = DateTime.now().minus({ days: 6 }).startOf('day').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfLast7Days);
      expect(result.endDate).toEqual(endOfToday);
    });

    it('should return next 7 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_7_DAYS, false);
      const startOfToday = DateTime.now().startOf('day').toJSDate();
      const endOfNext7Days = DateTime.now().plus({ days: 6 }).endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfToday);
      expect(result.endDate).toEqual(endOfNext7Days);
    });

    it("should return this month's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.THIS_MONTH, false);
      const startOfMonth = DateTime.now().startOf('month').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfMonth);
      expect(result.endDate).toEqual(endOfToday);
    });

    it("should return last month's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_MONTH, false);
      const startOfLastMonth = DateTime.now().minus({ months: 1 }).startOf('month').toJSDate();
      const endOfLastMonth = DateTime.now().minus({ months: 1 }).endOf('month').toJSDate();
      expect(result.startDate).toEqual(startOfLastMonth);
      expect(result.endDate).toEqual(endOfLastMonth);
    });

    it("should return next month's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_MONTH, false);
      const startOfNextMonth = DateTime.now().plus({ months: 1 }).startOf('month').toJSDate();
      const endOfNextMonth = DateTime.now().plus({ months: 1 }).endOf('month').toJSDate();
      expect(result.startDate).toEqual(startOfNextMonth);
      expect(result.endDate).toEqual(endOfNextMonth);
    });

    it('should return last 30 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_30_DAYS, false);
      const startOfLast30Days = DateTime.now().minus({ days: 29 }).startOf('day').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfLast30Days);
      expect(result.endDate).toEqual(endOfToday);
    });

    it('should return next 30 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_30_DAYS, false);
      const startOfToday = DateTime.now().startOf('day').toJSDate();
      const endOfNext30Days = DateTime.now().plus({ days: 29 }).endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfToday);
      expect(result.endDate).toEqual(endOfNext30Days);
    });

    it("should return this quarter's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.THIS_QUARTER, false);
      const startOfQuarter = DateTime.now().startOf('quarter').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfQuarter);
      expect(result.endDate).toEqual(endOfToday);
    });

    it("should return last quarter's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_QUARTER, false);
      const startOfLastQuarter = DateTime.now().minus({ quarters: 1 }).startOf('quarter').toJSDate();
      const endOfLastQuarter = DateTime.now().minus({ quarters: 1 }).endOf('quarter').toJSDate();
      expect(result.startDate).toEqual(startOfLastQuarter);
      expect(result.endDate).toEqual(endOfLastQuarter);
    });

    it("should return next quarter's date range", () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_QUARTER, false);
      const startOfNextQuarter = DateTime.now().plus({ quarters: 1 }).startOf('quarter').toJSDate();
      const endOfNextQuarter = DateTime.now().plus({ quarters: 1 }).endOf('quarter').toJSDate();
      expect(result.startDate).toEqual(startOfNextQuarter);
      expect(result.endDate).toEqual(endOfNextQuarter);
    });

    it('should return last 90 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_90_DAYS, false);
      const startOfLast90Days = DateTime.now().minus({ days: 89 }).startOf('day').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfLast90Days);
      expect(result.endDate).toEqual(endOfToday);
    });

    it('should return next 90 days date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_90_DAYS, false);
      const startOfToday = DateTime.now().startOf('day').toJSDate();
      const endOfNext90Days = DateTime.now().plus({ days: 89 }).endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfToday);
      expect(result.endDate).toEqual(endOfNext90Days);
    });

    it('should return last 12 months date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_12_MONTHS, false);
      const startOfLast12Months = DateTime.now().minus({ months: 12 }).startOf('day').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();
      expect(result.startDate).toEqual(startOfLast12Months);
      expect(result.endDate).toEqual(endOfToday);
    });

    it('should return next 12 months date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_12_MONTHS, false);
      const startOfToday = DateTime.now().startOf('day').toJSDate();
      const endOfNext12Months = DateTime.now().plus({ months: 12 }).endOf('day').toJSDate();

      expect(result.startDate).toEqual(startOfToday);
      expect(result.endDate).toEqual(endOfNext12Months);
    });

    it('should return last year date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.LAST_YEAR, false);
      const startOfLastYear = DateTime.now().minus({ years: 1 }).startOf('year').toJSDate();
      const endOfLastYear = DateTime.now().minus({ years: 1 }).endOf('year').toJSDate();

      expect(result.startDate).toEqual(startOfLastYear);
      expect(result.endDate).toEqual(endOfLastYear);
    });

    it('should return next year date range', () => {
      const result = service.getSelectedDate(DateSelectionTypes.NEXT_YEAR, false);
      const startOfNextYear = DateTime.now().plus({ years: 1 }).startOf('year').toJSDate();
      const endOfNextYear = DateTime.now().plus({ years: 1 }).endOf('year').toJSDate();

      expect(result.startDate).toEqual(startOfNextYear);
      expect(result.endDate).toEqual(endOfNextYear);
    });

    it('should return this year date range with showLastEndOf as false', () => {
      const result = service.getSelectedDate(DateSelectionTypes.THIS_YEAR, false);
      const startOfThisYear = DateTime.now().startOf('year').toJSDate();
      const endOfToday = DateTime.now().endOf('day').toJSDate();

      expect(result.startDate).toEqual(startOfThisYear);
      expect(result.endDate).toEqual(endOfToday);
    });

    it('should return this year date range with showLastEndOf as true', () => {
      const result = service.getSelectedDate(DateSelectionTypes.THIS_YEAR, true);
      const startOfThisYear = DateTime.now().startOf('year').toJSDate();
      const endOfThisYear = DateTime.now().endOf('year').toJSDate();

      expect(result.startDate).toEqual(startOfThisYear);
      expect(result.endDate).toEqual(endOfThisYear);
    });

    it('should handle default case in switch statement', () => {
      const invalidSelectionType = 'INVALID_TYPE' as DateSelectionTypes;
      const result = service.getSelectedDate(invalidSelectionType, false);
      expect(result).not.toBeNull();
    });
  });

  describe('formatSelectedDate', () => {
    const selectedDate: DateSelection = {
      startDate: DateTime.now().minus({ days: 1 }).toJSDate(),
      endDate: DateTime.now().toJSDate()
    };

    it('should format date to ISO', () => {
      const result = service.formatSelectedDate(selectedDate, DateFormatTypes.ISO, '');
      expect(result.startDate).toEqual(
        DateTime.fromJSDate(selectedDate.startDate as Date)
          .toUTC()
          .toISO()
      );
      expect(result.endDate).toEqual(
        DateTime.fromJSDate(selectedDate.endDate as Date)
          .toUTC()
          .toISO()
      );
    });

    it('should format date to JS Date', () => {
      const result = service.formatSelectedDate(selectedDate, DateFormatTypes.JSDate, '');
      expect(result.startDate).toEqual(selectedDate.startDate);
      expect(result.endDate).toEqual(selectedDate.endDate);
    });

    it('should format date to custom format', () => {
      const customFormat = 'dd-MM-yyyy';
      const result = service.formatSelectedDate(selectedDate, DateFormatTypes.CUSTOM, customFormat);
      expect(result.startDate).toEqual(DateTime.fromJSDate(selectedDate.startDate as Date).toFormat(customFormat));
      expect(result.endDate).toEqual(DateTime.fromJSDate(selectedDate.endDate as Date).toFormat(customFormat));
    });

    it('should format date to default format', () => {
      const defaultFormat = "yyyy-MM-dd'T'HH:mm:ssZZ";
      const result = service.formatSelectedDate(selectedDate, null, '');
      expect(result.startDate).toEqual(DateTime.fromJSDate(selectedDate.startDate as Date).toFormat(defaultFormat));
      expect(result.endDate).toEqual(DateTime.fromJSDate(selectedDate.endDate as Date).toFormat(defaultFormat));
    });
  });

  describe('getSelectionTypes', () => {
    it('should return all selection types', () => {
      const selectionTypes = service.getSelectionTypes();
      expect(selectionTypes).toEqual([
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
      ]);
    });
  });
});
