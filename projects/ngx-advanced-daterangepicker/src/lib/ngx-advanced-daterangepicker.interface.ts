export enum DateSelectionTypes {
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  THIS_WEEK = 'thisWeek',
  LAST_WEEK = 'lastWeek',
  NEXT_WEEK = 'nextWeek',
  LAST_7_DAYS = 'last7Days',
  NEXT_7_DAYS = 'next7Days',
  THIS_MONTH = 'thisMonth',
  LAST_MONTH = 'lastMonth',
  NEXT_MONTH = 'nextMonth',
  LAST_30_DAYS = 'last30Days',
  NEXT_30_DAYS = 'next30Days',
  THIS_QUARTER = 'thisQuarter',
  LAST_QUARTER = 'lastQuarter',
  NEXT_QUARTER = 'nextQuarter',
  LAST_90_DAYS = 'last90Days',
  NEXT_90_DAYS = 'next90Days',
  LAST_12_MONTHS = 'last12Months',
  NEXT_12_MONTHS = 'next12Months',
  LAST_YEAR = 'lastYear',
  NEXT_YEAR = 'nextYear',
  THIS_YEAR = 'thisYear',
  CUSTOM = 'custom',
}

export enum DateSelectionDisplayTypes {
  TODAY = 'Today',
  YESTERDAY = 'Yesterday',
  THIS_WEEK = 'This Week',
  LAST_WEEK = 'Last Week',
  NEXT_WEEK = 'Next Week',
  LAST_7_DAYS = 'Last 7 Days',
  NEXT_7_DAYS = 'Next 7 Days',
  THIS_MONTH = 'This Month',
  LAST_MONTH = 'Last Month',
  NEXT_MONTH = 'Next Month',
  LAST_30_DAYS = 'Last 30 Days',
  NEXT_30_DAYS = 'Next 30 Days',
  THIS_QUARTER = 'This Quarter',
  LAST_QUARTER = 'Last Quarter',
  NEXT_QUARTER = 'Next Quarter',
  LAST_90_DAYS = 'Last 90 Days',
  NEXT_90_DAYS = 'Next 90 Days',
  LAST_12_MONTHS = 'Last 12 Months',
  NEXT_12_MONTHS = 'Next 12 Months',
  LAST_YEAR = 'Last Year',
  NEXT_YEAR = 'Next Year',
  THIS_YEAR = 'This Year',
  CUSTOM = 'Custom',
}

export enum SelectionModeTypes {
  'DAY' = 'DAY',
  'WEEK' = 'WEEK',
  'MONTH' = 'MONTH',
  'QUARTER' = 'QUARTER',
  'YEAR' = 'YEAR',
  'CUSTOM' = 'CUSTOM',
}

export enum SelectionDisplayTypes {
  'NEXT' = 'next',
  'LAST' = 'last',
  'THIS' = 'this',
}

export type DateTypes = 'startDate' | 'endDate';

export type DateSelection = Record<DateTypes, string | Date | null>;

export type CustomDateSelection = DateSelection;

export type SelectionTypes = {
  type: DateSelectionTypes | null;
  display: DateSelectionDisplayTypes | null;
  mode: SelectionModeTypes | null;
  displayType: SelectionDisplayTypes | null;
};
