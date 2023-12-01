import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGanttViewModeSelectorComponent } from './ngx-gantt-view-mode-selector.component';

describe('NgxGanttViewModeSelectorComponent', () => {
  let component: NgxGanttViewModeSelectorComponent;
  let fixture: ComponentFixture<NgxGanttViewModeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxGanttViewModeSelectorComponent]
    });
    fixture = TestBed.createComponent(NgxGanttViewModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
