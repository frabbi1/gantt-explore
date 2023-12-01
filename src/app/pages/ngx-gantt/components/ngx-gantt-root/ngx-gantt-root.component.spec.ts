import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGanttRootComponent } from './ngx-gantt-root.component';

describe('NgxGanttRootComponent', () => {
  let component: NgxGanttRootComponent;
  let fixture: ComponentFixture<NgxGanttRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxGanttRootComponent]
    });
    fixture = TestBed.createComponent(NgxGanttRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
