import { NgModule } from '@angular/core';
import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  SatDatepickerModule,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from 'saturn-datepicker';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxAdvancedDaterangepickerComponent],
  imports: [CommonModule, NgbModule, SatDatepickerModule, MatButtonModule],
  exports: [NgxAdvancedDaterangepickerComponent],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
  ],
})
export class NgxAdvancedDaterangepickerModule {}
