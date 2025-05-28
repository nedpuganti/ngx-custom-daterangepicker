import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  signal,
  ViewEncapsulation,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatToolbar } from '@angular/material/toolbar';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  DateFormatTypes,
  DateSelection,
  DateSelectionDisplayTypes,
  DateSelectionTypes,
  NgxAdvancedDaterangepickerComponent,
  SelectionTypes
} from 'ngx-advanced-daterangepicker';

@Component({
  selector: 'ncd-root',
  template: `
    <mat-toolbar style="background: #d7e3ff;color:#005cbb">
      <span>Advanced DateRange Picker</span>
    </mat-toolbar>
    <section style="padding: 20px">
      <div style="display: grid;grid-template-columns: 1fr 1fr;gap: 20px;">
        <div>
          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-card-title>Configuration</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <section style="display: flex; flex-direction: column;">
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="inlineDatePicker">Inline Range</mat-checkbox>
                @if (!showNext()) {
                  <mat-checkbox (change)="configurationChange()" [(ngModel)]="disableMaxDate">Disable Max Date</mat-checkbox>
                }
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="hideWeek">Hide Week</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="hideMonth">Hide Month</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="hideQuarter">Hide Quarter</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="hideYear">Hide Year</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="hideLast">Hide Last</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="showNext">Show Next</mat-checkbox>
                <mat-checkbox (change)="configurationChange()" [(ngModel)]="showLastEndOfThisPeriod">
                  Show Last EndOf This Period
                </mat-checkbox>
              </section>
            </mat-card-content>
          </mat-card>
          <br />
          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-card-title>Date Selection</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <section>
                <mat-radio-group [(ngModel)]="dateFormatType">
                  <mat-radio-button [value]="'JS'">JS Date</mat-radio-button>
                  <mat-radio-button [value]="'ISO'">ISO Date</mat-radio-button>
                  <mat-radio-button [value]="">Default</mat-radio-button>
                </mat-radio-group>
              </section>
              <br />
              <section>
                <mat-radio-group [(ngModel)]="selectDays">
                  <mat-radio-button [value]="'custom'">Custom</mat-radio-button>
                  <mat-radio-button [value]="'today'">Today</mat-radio-button>
                  <mat-radio-button [value]="'yesterday'">Yesterday</mat-radio-button>

                  @if (!hideWeek()) {
                    <div>
                      <mat-radio-button [value]="'thisWeek'">This Week</mat-radio-button>
                      @if (!hideLast()) {
                        <mat-radio-button [value]="'lastWeek'">Last Week</mat-radio-button>
                        <mat-radio-button [value]="'last7Days'">Last 7 Days</mat-radio-button>
                      }
                      @if (showNext()) {
                        <mat-radio-button [value]="'nextWeek'">Next Week</mat-radio-button>
                        <mat-radio-button [value]="'next7Days'">Next 7 Days</mat-radio-button>
                      }
                    </div>
                  }
                  @if (!hideMonth()) {
                    <div>
                      <mat-radio-button [value]="'thisMonth'">This Month</mat-radio-button>
                      @if (!hideLast()) {
                        <mat-radio-button [value]="'lastMonth'">Last Month</mat-radio-button>
                        <mat-radio-button [value]="'last30Days'">Last 30 Days</mat-radio-button>
                      }
                      @if (showNext()) {
                        <mat-radio-button [value]="'nextMonth'">Next Month</mat-radio-button>
                        <mat-radio-button [value]="'next30Days'">Next 30 Days</mat-radio-button>
                      }
                    </div>
                  }
                  @if (!hideQuarter()) {
                    <div>
                      <mat-radio-button [value]="'thisQuarter'">This Quarter</mat-radio-button>
                      @if (!hideLast()) {
                        <mat-radio-button [value]="'lastQuarter'">Last Quarter</mat-radio-button>
                        <mat-radio-button [value]="'last90Days'">Last 90 Days</mat-radio-button>
                      }
                      @if (showNext()) {
                        <mat-radio-button [value]="'nextQuarter'">Next Quarter</mat-radio-button>
                        <mat-radio-button [value]="'next90Days'">Next 90 Days</mat-radio-button>
                      }
                    </div>
                  }
                  @if (!hideYear()) {
                    <div>
                      <mat-radio-button [value]="'thisYear'">This Year</mat-radio-button>
                      @if (!hideLast()) {
                        <mat-radio-button [value]="'last12Months'">Last 12 Months</mat-radio-button>
                        <mat-radio-button [value]="'lastYear'">Last Year</mat-radio-button>
                      }
                      @if (showNext()) {
                        <mat-radio-button [value]="'next12Months'">Next 12 Months</mat-radio-button>
                        <mat-radio-button [value]="'nextYear'">Next Year</mat-radio-button>
                      }
                    </div>
                  }
                </mat-radio-group>
              </section>
              <br />
              <section style="display: flex; flex-direction: row; gap:20px">
                <div>
                  @if (hideCalendar()) {
                    <button mat-flat-button (click)="changeCalendar()">Show Calendar</button>
                  } @else {
                    <button mat-stroked-button (click)="changeCalendar()">Hide Calendar</button>
                  }
                </div>

                @if (!inlineDatePicker() && !hideCalendar()) {
                  <div>
                    @if (autoApply()) {
                      <button mat-flat-button (click)="changeAutoApply()">Apply Manually</button>
                    } @else {
                      <button mat-stroked-button (click)="changeAutoApply()">Apply Automatically</button>
                    }
                  </div>
                }
              </section>
            </mat-card-content>
          </mat-card>
        </div>

        <div>
          <mat-card appearance="outlined">
            <mat-card-content>
              <mat-card appearance="outlined">
                <mat-card-content>
                  @let dateRanges = dateRange();
                  <h3>Selected : {{ selectedType() }}</h3>
                  <h3>Date Range : {{ dateRanges.startDate | date: 'medium' }} - {{ dateRanges.endDate | date: 'medium' }}</h3>
                  <h3>Selected Date: {{ dateRanges.startDate }} - {{ dateRanges.endDate }}</h3>
                </mat-card-content>
              </mat-card>
              <br />
              <ngx-advanced-daterangepicker
                [inlineDatePicker]="inlineDatePicker()"
                [disableMaxDate]="disableMaxDate()"
                [selectDays]="selectDays"
                [dateFormatType]="dateFormatType()"
                [hideWeek]="hideWeek()"
                [hideMonth]="hideMonth()"
                [hideQuarter]="hideQuarter()"
                [hideYear]="hideYear()"
                [hideCalendar]="hideCalendar()"
                [showNext]="showNext()"
                [hideLast]="hideLast()"
                [showLastEndOfThisPeriod]="showLastEndOfThisPeriod()"
                [customDate]="customDate()"
                [autoApply]="autoApply()"
                [width]="hideCalendar() ? '200px' : '550px'"
                (dateRangeSelected)="getDateSelection($event)"
                (appliedTypeSelected)="getAppliedTypeSelected($event)"
              />
            </mat-card-content>
          </mat-card>
        </div>
      </div>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCheckbox,
    FormsModule,
    MatButton,
    MatRadioGroup,
    MatRadioButton,
    MatToolbar,
    DatePipe,
    NgxAdvancedDaterangepickerComponent
  ]
})
export class AppComponent {
  title = 'ngx-custom-daterangepicker';

  inlineDatePicker: WritableSignal<boolean> = signal(false);
  disableMaxDate: WritableSignal<boolean> = signal(false);
  hideMonth: WritableSignal<boolean> = signal(false);
  hideQuarter: WritableSignal<boolean> = signal(true);
  hideWeek: WritableSignal<boolean> = signal(false);
  hideYear: WritableSignal<boolean> = signal(false);
  dateFormatType: WritableSignal<DateFormatTypes | null> = signal(null);
  hideCalendar: WritableSignal<boolean> = signal(false);
  showNext: WritableSignal<boolean> = signal(false);
  hideLast: WritableSignal<boolean> = signal(false);
  showLastEndOfThisPeriod: WritableSignal<boolean> = signal(false);
  autoApply: WritableSignal<boolean> = signal(false);

  selectDays: DateSelectionTypes = DateSelectionTypes.TODAY;
  selectedType: WritableSignal<DateSelectionDisplayTypes | null> = signal(null);
  dateRange: WritableSignal<DateSelection<Date | string | null>> = signal({ startDate: null, endDate: null });
  customDate: WritableSignal<DateSelection> = signal({ startDate: new Date(), endDate: new Date() });

  configurationChange(): void {
    this.selectDays = DateSelectionTypes.TODAY;
  }

  getDateSelection(ev: DateSelection<Date | string | null>): void {
    this.dateRange.set(ev);
  }

  getAppliedTypeSelected(ev: SelectionTypes): void {
    this.selectDays = ev.type as DateSelectionTypes;
    this.selectedType.set(ev.displayName);
  }

  changeCalendar(): void {
    this.hideCalendar.update((val: boolean): boolean => !val);
  }

  changeAutoApply(): void {
    this.autoApply.update((val: boolean): boolean => !val);
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection(), provideBrowserGlobalErrorListeners()]
}).catch((err) => console.error(err));
