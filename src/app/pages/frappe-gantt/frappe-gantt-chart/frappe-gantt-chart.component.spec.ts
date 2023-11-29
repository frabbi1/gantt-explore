import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappeGanttChartComponent } from './frappe-gantt-chart.component';

describe('FrappeGanttChartComponent', () => {
  let component: FrappeGanttChartComponent;
  let fixture: ComponentFixture<FrappeGanttChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrappeGanttChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrappeGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
