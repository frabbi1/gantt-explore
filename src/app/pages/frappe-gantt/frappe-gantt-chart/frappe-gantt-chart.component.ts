import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-frappe-gantt-chart',
  templateUrl: './frappe-gantt-chart.component.html',
  styleUrls: ['./frappe-gantt-chart.component.scss']
})
export class FrappeGanttChartComponent implements OnInit{
  gantt: any;
  @ViewChild('gantt') ganttEl: ElementRef | undefined;
  tasks = [
    {
      id: 't1',
      name: 'TASK 1',
      start: '2021-12-31T13:21:54.530Z',
      end: '2021-12-31T13:51:54.530Z',
      progress: 47,
      dependencies: '',
    },
    {
      id: 't2',
      name: 'TASK 2',
      start: '2021-12-31T14:21:54.530Z',
      end: '2021-12-31T14:51:54.530Z',
      progress: 19.5,
      dependencies: 't1',
    },
    {
      id: 't3',
      name: 'TASK 3',
      start: '2021-12-31T14:21:54.530Z',
      end: '2021-12-31T14:51:54.530Z',
      progress: 19.5,
      dependencies: 't2',
    },
  ];

  ngOnInit() {
    // do nothing
  }
}
