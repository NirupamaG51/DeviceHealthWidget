import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIssuesTableComponent } from './device-issues-table.component';

describe('DeviceIssuesTableComponent', () => {
  let component: DeviceIssuesTableComponent;
  let fixture: ComponentFixture<DeviceIssuesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceIssuesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIssuesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
