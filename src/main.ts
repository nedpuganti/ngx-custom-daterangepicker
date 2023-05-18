import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DateSelectionTypes, NgxAdvancedDaterangepickerComponent } from 'ngx-advanced-daterangepicker';
import { NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ncd-root',
  template: `
    <section style="padding: 10px">
      <mat-card>
        <mat-card-content>
          <h2>Hide Configuration</h2>
          <section>
            <mat-checkbox [(ngModel)]="hideWeek" (change)="changeDefaultDate()">Hide Week</mat-checkbox>
            <mat-checkbox [(ngModel)]="hideMonth" (change)="changeDefaultDate()">Hide Month</mat-checkbox>
            <mat-checkbox [(ngModel)]="hideQuarter" (change)="changeDefaultDate()">Hide Quarter</mat-checkbox>
            <mat-checkbox [(ngModel)]="hideYear" (change)="changeDefaultDate()">Hide Year</mat-checkbox>
            <mat-checkbox [(ngModel)]="hideLast" (change)="changeDefaultDate()">Hide Last</mat-checkbox>
            <mat-checkbox [(ngModel)]="showNext" (change)="changeDefaultDate()">Show Next</mat-checkbox>
            <mat-checkbox [(ngModel)]="showLastEndOf" (change)="changeDefaultDate()">show Last EndOf</mat-checkbox>
          </section>
        </mat-card-content>
      </mat-card>
      <br />
      <mat-card>
        <mat-card-content>
          <h2>
            Change Default Date
            <button mat-stroked-button [color]="isoDateFormat ? 'primary' : 'accent'" (click)="changeToIso()">to ISO Date</button>

            <button mat-stroked-button [color]="hideCalendar ? 'primary' : 'accent'" (click)="changeCalendar()">Hide/Show Calendar</button>
          </h2>
          <br />
          <section>
            <mat-radio-group [(ngModel)]="selectDays" (change)="changeDefaultDate()">
              <mat-radio-button [value]="'today'">Today</mat-radio-button>
              <mat-radio-button [value]="'yesterday'">Yesterday</mat-radio-button>
              <mat-radio-button [value]="'thisWeek'">This Week</mat-radio-button>
              <mat-radio-button [value]="'lastWeek'">Last Week</mat-radio-button>
              <mat-radio-button [value]="'nextWeek'">Next Week</mat-radio-button>
              <mat-radio-button [value]="'last7Days'">Last 7 Days</mat-radio-button>
              <mat-radio-button [value]="'next7Days'">Next 7 Days</mat-radio-button>
              <mat-radio-button [value]="'thisMonth'">This Month</mat-radio-button>
              <mat-radio-button [value]="'lastMonth'">Last Month</mat-radio-button>
              <mat-radio-button [value]="'nextMonth'">Next Month</mat-radio-button>
              <mat-radio-button [value]="'last30Days'">Last 30 Days</mat-radio-button>
              <mat-radio-button [value]="'next30Days'">Next 30 Days</mat-radio-button>
              <mat-radio-button [value]="'thisQuarter'">This Quarter</mat-radio-button>
              <mat-radio-button [value]="'lastQuarter'">Last Quarter</mat-radio-button>
              <mat-radio-button [value]="'nextQuarter'">Next Quarter</mat-radio-button>
              <mat-radio-button [value]="'last90Days'">Last 90 Days</mat-radio-button>
              <mat-radio-button [value]="'next90Days'">Next 90 Days</mat-radio-button>
              <mat-radio-button [value]="'last12Months'">Last 12 Months</mat-radio-button>
              <mat-radio-button [value]="'next12Months'">Next 12 Months</mat-radio-button>
              <mat-radio-button [value]="'lastYear'">Last Year</mat-radio-button>
              <mat-radio-button [value]="'nextYear'">Next Year</mat-radio-button>
              <mat-radio-button [value]="'thisYear'">This Year</mat-radio-button>
              <mat-radio-button [value]="'custom'">Custom</mat-radio-button>
            </mat-radio-group>
          </section>
        </mat-card-content>
      </mat-card>

      <ng-container *ngIf="!reloading">
        <br />
        <mat-card>
          <mat-card-content>
            <h2>
              Selected Date : {{ dateRange?.startDate }} -
              {{ dateRange?.endDate }}
            </h2>
            <ngx-advanced-daterangepicker
              [selectDays]="selectDays"
              [isoDateFormat]="isoDateFormat"
              [hideWeek]="hideWeek"
              [hideMonth]="hideMonth"
              [hideQuarter]="hideQuarter"
              [hideYear]="hideYear"
              [hideCalendar]="hideCalendar"
              [showNext]="showNext"
              [hideLast]="hideLast"
              [showLastEndOf]="showLastEndOf"
              [customDate]="customDate"
              [width]="hideCalendar ? '200px' : '550px'"
              (dateRangeSelected)="getDateSelection($event)"
            >
            </ngx-advanced-daterangepicker>
          </mat-card-content>
        </mat-card>
      </ng-container>
    </section>
  `,
  styles: [
    `
      html,
      body {
        height: 100%;
      }

      body {
        margin: 0;
        font-family: Roboto, 'Helvetica Neue', sans-serif;
      }
    `
  ],
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatButtonModule, MatRadioModule, NgIf, NgxAdvancedDaterangepickerComponent]
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

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]
}).catch((err) => console.error(err));
