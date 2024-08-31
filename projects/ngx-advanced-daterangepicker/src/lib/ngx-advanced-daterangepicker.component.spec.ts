import { TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DateTime } from 'luxon';
import { of } from 'rxjs';

import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';
import { DateSelectionTypes } from './ngx-advanced-daterangepicker.interface';
import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

describe('NgxAdvancedDaterangepickerComponent', () => {
  let component: NgxAdvancedDaterangepickerComponent;
  let fixture: ComponentFixture<NgxAdvancedDaterangepickerComponent>;
  let dateRangePickerService: NgxAdvancedDaterangepickerService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAdvancedDaterangepickerComponent],
      providers: [
        NgxAdvancedDaterangepickerService,
        {
          provide: MatDialog,
          useValue: {
            open: jest.fn().mockReturnValue({
              afterClosed: jest.fn().mockReturnValue(of(true))
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxAdvancedDaterangepickerComponent);
    component = fixture.componentInstance;
    dateRangePickerService = TestBed.inject(NgxAdvancedDaterangepickerService);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and load date selections on init', () => {
    const loadDateSelectionsSpy = jest.spyOn(component, 'loadDateSelections');
    const onDaySelectSpy = jest.spyOn(component, 'onDaySelect');
    component.ngOnInit();
    expect(loadDateSelectionsSpy).toHaveBeenCalled();
    expect(onDaySelectSpy).toHaveBeenCalledWith(DateSelectionTypes.TODAY);
  });

  it('should call init on changes', () => {
    const initSpy = jest.spyOn(component, 'init');
    component.ngOnChanges({
      selectDays: {
        currentValue: DateSelectionTypes.TODAY,
        previousValue: null,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    expect(initSpy).toHaveBeenCalled();
  });

  it('should select custom date range', () => {
    const customDate = {
      startDate: DateTime.now().minus({ days: 5 }).toJSDate(),
      endDate: DateTime.now().toJSDate()
    };
    component.customDate.set(customDate);
    component.onDaySelect(DateSelectionTypes.CUSTOM);
    expect(component.selectedDate().startDate).toEqual(customDate.startDate);
    expect(component.selectedDate().endDate).toEqual(customDate.endDate);
  });

  it('should select predefined date range', () => {
    const selectedDate = {
      startDate: DateTime.now().startOf('day').toJSDate(),
      endDate: DateTime.now().endOf('day').toJSDate()
    };
    jest.spyOn(dateRangePickerService, 'getSelectedDate').mockReturnValue(selectedDate);
    component.onDaySelect(DateSelectionTypes.TODAY);
    expect(component.selectedDate().startDate).toEqual(selectedDate.startDate);
    expect(component.selectedDate().endDate).toEqual(selectedDate.endDate);
  });

  it('should open date select dialog', () => {
    const showDatePicker = {} as TemplateRef<unknown>;
    component.openDateSelectDialog(showDatePicker);
    expect(dialog.open).toHaveBeenCalledWith(
      showDatePicker,
      expect.objectContaining({
        width: component.width(),
        height: 'auto',
        hasBackdrop: true,
        disableClose: component.isButtonVisible(),
        autoFocus: false,
        panelClass: 'daterangepicker-modal'
      })
    );
  });

  it('should emit selected date and type on dateSelected', () => {
    const selectedDate = {
      startDate: DateTime.now().startOf('day').toJSDate(),
      endDate: DateTime.now().endOf('day').toJSDate()
    };
    const selectedType = {
      type: DateSelectionTypes.TODAY,
      displayName: null,
      mode: null,
      displayType: null
    };
    component.selectedDate.set(selectedDate);
    component.selectedType.set(selectedType);
    const dateRangeSelectedSpy = jest.spyOn(component.dateRangeSelected, 'emit');
    const appliedTypeSelectedSpy = jest.spyOn(component.appliedTypeSelected, 'emit');
    component.dateSelected();
    expect(dateRangeSelectedSpy).toHaveBeenCalledWith(expect.objectContaining(selectedDate));
    expect(appliedTypeSelectedSpy).toHaveBeenCalledWith(expect.objectContaining(selectedType));
  });

  it('should reset to applied date and type on reset', () => {
    const appliedDate = {
      startDate: DateTime.now().startOf('day').toJSDate(),
      endDate: DateTime.now().endOf('day').toJSDate()
    };
    const appliedType = {
      type: DateSelectionTypes.TODAY,
      displayName: null,
      mode: null,
      displayType: null
    };
    component.appliedDate.set(appliedDate);
    component.appliedType.set(appliedType);
    component.reset();
    expect(component.selectedDate()).toEqual(appliedDate);
    expect(component.selectedType()).toEqual(appliedType);
  });
});
