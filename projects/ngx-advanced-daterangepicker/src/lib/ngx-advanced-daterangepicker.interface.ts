export const DateSelectionTypes = {
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  THIS_WEEK: 'thisWeek',
  LAST_WEEK: 'lastWeek',
  NEXT_WEEK: 'nextWeek',
  LAST_7_DAYS: 'last7Days',
  NEXT_7_DAYS: 'next7Days',
  THIS_MONTH: 'thisMonth',
  LAST_MONTH: 'lastMonth',
  NEXT_MONTH: 'nextMonth',
  LAST_30_DAYS: 'last30Days',
  NEXT_30_DAYS: 'next30Days',
  THIS_QUARTER: 'thisQuarter',
  LAST_QUARTER: 'lastQuarter',
  NEXT_QUARTER: 'nextQuarter',
  LAST_90_DAYS: 'last90Days',
  NEXT_90_DAYS: 'next90Days',
  LAST_12_MONTHS: 'last12Months',
  NEXT_12_MONTHS: 'next12Months',
  LAST_YEAR: 'lastYear',
  NEXT_YEAR: 'nextYear',
  THIS_YEAR: 'thisYear',
  CUSTOM: 'custom'
} as const;

export const DateSelectionDisplayTypes = {
  TODAY: 'Today',
  YESTERDAY: 'Yesterday',
  THIS_WEEK: 'This Week',
  LAST_WEEK: 'Last Week',
  LAST_7_DAYS: 'Last 7 Days',
  LAST_15_DAYS: 'Last 15 Days',
  NEXT_WEEK: 'Next Week',
  NEXT_7_DAYS: 'Next 7 Days',
  THIS_MONTH: 'This Month',
  LAST_MONTH: 'Last Month',
  LAST_30_DAYS: 'Last 30 Days',
  NEXT_MONTH: 'Next Month',
  NEXT_30_DAYS: 'Next 30 Days',
  THIS_QUARTER: 'This Quarter',
  LAST_QUARTER: 'Last Quarter',
  LAST_90_DAYS: 'Last 90 Days',
  NEXT_QUARTER: 'Next Quarter',
  NEXT_90_DAYS: 'Next 90 Days',
  LAST_12_MONTHS: 'Last 12 Months',
  LAST_YEAR: 'Last Year',
  NEXT_12_MONTHS: 'Next 12 Months',
  NEXT_YEAR: 'Next Calendar Year',
  THIS_YEAR: 'This Year',
  CUSTOM: 'Custom'
} as const;

export const SelectionModeTypes = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  YEAR: 'YEAR',
  CUSTOM: 'CUSTOM'
} as const;

export const SelectionDisplayTypes = {
  NEXT: 'next',
  LAST: 'last',
  THIS: 'this'
} as const;

export const DateFormatTypes = {
  ISO: 'ISO',
  JSDate: 'JS',
  CUSTOM: 'CUSTOM'
} as const;

type ObjectValues<T> = T[keyof T];

export type DateFormatTypes = ObjectValues<typeof DateFormatTypes>;
export type DateSelectionTypes = ObjectValues<typeof DateSelectionTypes>;
export type DateSelectionDisplayTypes = ObjectValues<typeof DateSelectionDisplayTypes>;
export type SelectionModeTypes = ObjectValues<typeof SelectionModeTypes>;
export type SelectionDisplayTypes = ObjectValues<typeof SelectionDisplayTypes>;

export type DateTypes = 'startDate' | 'endDate';

export type DateSelection<T = Date | null> = Record<DateTypes, T>;

export type SelectionTypes = {
  type: DateSelectionTypes | null;
  displayName: DateSelectionDisplayTypes | null;
  displayText?: string | null;
  mode: SelectionModeTypes | null;
  displayType: SelectionDisplayTypes | null;
  isActive?: boolean;
};
