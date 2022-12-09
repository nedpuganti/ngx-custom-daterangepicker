import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DateSelectionTypes } from 'ngx-advanced-daterangepicker';

@Component({
  selector: 'ncd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  hideMonth: any;
  hideQuarter: any;
  hideWeek: any;
  hideYear: any;
  selectDays: DateSelectionTypes = DateSelectionTypes.TODAY;
  dateRange: any;
  isoDateFormat: any;
  hideCalendar: any;
  showNext: any;
  hideLast: any;
  showLastEndOf: any;

  reloading: any;
  title = 'ngx-custom-daterangepicker';

  customDate: any = { startDate: new Date(), endDate: new Date() };

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getDateSelection(ev: any) {
    console.log(ev);
    this.dateRange = ev;
  }

  changeToIso() {
    this.isoDateFormat = !this.isoDateFormat;
    this.changeDefaultDate();
  }

  changeCalendar() {
    this.hideCalendar = !this.hideCalendar;
    this.changeDefaultDate();
  }

  changeDefaultDate() {
    this.reloading = true;
    this.cdr.detectChanges();
    this.reloading = false;
    this.cdr.detectChanges();
  }
}
