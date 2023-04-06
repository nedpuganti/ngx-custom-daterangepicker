import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  NativeDateAdapter,
} from '@angular/material/core';
import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import {
  DefaultMatCalendarRangeStrategy,
  MatDatepickerModule,
  MatRangeDateSelectionModel,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';
@NgModule({
  declarations: [NgxAdvancedDaterangepickerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  exports: [NgxAdvancedDaterangepickerComponent],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
    NgxAdvancedDaterangepickerService,
  ],
})
export class NgxAdvancedDaterangepickerModule {}
