import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';

describe('NgxAdvancedDaterangepickerComponent', () => {
  let component: NgxAdvancedDaterangepickerComponent;
  let fixture: ComponentFixture<NgxAdvancedDaterangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdvancedDaterangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdvancedDaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
