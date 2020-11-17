import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ncd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideMonth;
  hideQuarter;
  hideWeek;
  hideYear;
  selectDays = 'today';
  dateRange;
  isoDateFormat;
  hideCalendar;
  showNext;
  hideLast;
  showLastEndOf;

  reloading;
  title = 'ngx-custom-daterangepicker';

  customDate = { startDate: new Date(), endDate: new Date() };

  constructor(private cdr: ChangeDetectorRef) {}

  getDateSelection(ev) {
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
