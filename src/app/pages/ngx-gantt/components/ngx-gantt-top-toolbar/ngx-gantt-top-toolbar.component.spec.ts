import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGanttTopToolbarComponent } from './ngx-gantt-top-toolbar.component';

describe('NgxGanttTopToolbarComponent', () => {
  let component: NgxGanttTopToolbarComponent;
  let fixture: ComponentFixture<NgxGanttTopToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxGanttTopToolbarComponent]
    });
    fixture = TestBed.createComponent(NgxGanttTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
