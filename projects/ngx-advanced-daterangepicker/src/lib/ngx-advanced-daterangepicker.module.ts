import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import {
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
  MatRangeDateSelectionModel
} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatDialogModule, MatDatepickerModule, NgxAdvancedDaterangepickerComponent],
  exports: [NgxAdvancedDaterangepickerComponent],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: NativeDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy
    },
    NativeDateAdapter,
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
    NgxAdvancedDaterangepickerService
  ]
})
export class NgxAdvancedDaterangepickerModule {}
