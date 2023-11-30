import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GanttDragEvent, GanttItem, NgxGanttComponent} from '@worktile/gantt';
import {NgxGanttDataService} from '../services/ngx-gantt-data.service';
import {DataTypeEnum, IColumn, Task} from '../models/models';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ngx-gantt-chart',
  templateUrl: './ngx-gantt-chart.component.html',
  styleUrls: ['./ngx-gantt-chart.component.scss']
})
export class NgxGanttChartComponent implements OnInit, AfterViewInit{
  items: GanttItem[] = [];
  tasks: Task[] = [];
  columns: IColumn[] = [];
  loading: boolean = false;
  clickedTask!: Task;
  showDetailsModalVisible: boolean = false;
  @ViewChild('gantt') ganttComponent!: NgxGanttComponent;

  constructor(private ganttDataService: NgxGanttDataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initTasksAndForm();
    this.getItems();
    this.initColumns();
  }

  ngAfterViewInit() {
    const date = new Date('2022-12-15')
    setTimeout(() => this.ganttComponent.scrollToDate(Date.parse(date.toString())), 200);
  }

  getControl(id: string, controlName: string): FormControl {
    const task = this.tasks.find(t => t.id === id);
    return <FormControl> task?.formGroup?.get(controlName);
  }

  showDetails(id: string) {
    this.clickedTask = this.tasks.find(t => t.id === id)!;
    this.clickedTask.duration = this.getDaysDuration(new Date(this.clickedTask.start), new Date(this.clickedTask.finish));
    this.showDetailsModalVisible = true;

  }

  handleShowDetailsModalOk() {
    this.showDetailsModalVisible = false;
  }

  dragEnded($event: GanttDragEvent) {
    const task = this.tasks.find(task => task.id === $event.item.id)!;
    const start = $event.item.start! * 1000;
    const end = $event.item.end! * 1000;
    const startDate = this.formatDateToYYYYMMDD(new Date(start));
    const endDate = this.formatDateToYYYYMMDD(new Date(end));
    task.formGroup?.get('start')?.patchValue(startDate);
    task.formGroup?.get('finish')?.patchValue(endDate);
  }

  getPriority(id: string): number {
    return this.tasks.find(t => t.id === id)?.priority ?? 0;
  }

  getDuration(id: string): number {
    const task =  this.tasks.find(t => t.id === id)!;
    return this.getDaysDuration(new Date(task.start), new Date(task.finish));
  }

  private initTasksAndForm(): void {
    this.tasks = this.ganttDataService.getTasks();
    this.tasks.forEach(task => {
      task.formGroup = this.fb.group({
        title: [task.title],
        start: [task.start],
        finish: [task.finish]
      });

      task.formGroup.valueChanges.subscribe(value => {
        task.start = value.start;
        task.finish = value.finish;
        let correspondingItem = this.items.find(item => item.id === task.id)!;
        correspondingItem.start = Date.parse(task.start.toString());
        correspondingItem.end = Date.parse(task.finish.toString());
        this.items = [...this.items];
      })
    });
  }

  private getItems(): void {
    this.ganttDataService.getItems().subscribe(res => {
      this.items = [...res];
    })
  }

  private initColumns(): void {
    this.columns = [
      {
        index: 0, name: 'Task', width: '100px', dataType: DataTypeEnum.STRING, isInput: false, prop: 'title'
      },
      {
        index: 1, name: 'Start', width: '160px', dataType: DataTypeEnum.DATE, isInput: true, prop: 'start'
      },
      {
        index: 2, name: 'Finish', width: '160px', dataType: DataTypeEnum.DATE, isInput: true, prop: 'finish'
      }
    ];
  }

  private getDaysDuration(startDate: Date, endDate: Date): number {
    // Calculate the difference in milliseconds
    const timeDifference = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  private formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
