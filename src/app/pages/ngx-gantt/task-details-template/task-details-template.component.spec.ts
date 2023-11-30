import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsTemplateComponent } from './task-details-template.component';

describe('TaskDetailsTemplateComponent', () => {
  let component: TaskDetailsTemplateComponent;
  let fixture: ComponentFixture<TaskDetailsTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailsTemplateComponent]
    });
    fixture = TestBed.createComponent(TaskDetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
