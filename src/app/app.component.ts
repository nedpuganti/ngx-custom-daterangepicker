import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ncd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideMonth: any;
  hideQuarter: any;
  hideWeek: any;
  hideYear: any;
  selectDays = 'today';
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
