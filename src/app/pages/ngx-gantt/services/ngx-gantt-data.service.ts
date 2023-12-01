import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GanttItem, GanttLink} from '@worktile/gantt';
import { Task } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NgxGanttDataService {
  constructor() {}

  getItems(): Observable<GanttItem[]> {
    const items = this.getTasks().map(task => <GanttItem>{
        id: task.id,
        title: task.title,
        start: Date.parse(task.start.toString()),
        end: Date.parse(task.finish.toString()),
        links: task.links?.map(l => <GanttLink>{
          link: l, color: '#777777'
        }),
        progress: task.progress,
    });

    return of(items);
  }

  getTasks(): Task[] {
    return [
      {
        id: '0',
        title: 'Task 0',
        start: '2023-01-01',
        finish: '2023-01-31',
        links: ['1', '3'],
        priority: 5
      },
      {
        id: '1',
        title: 'Task 1',
        start: '2023-02-15',
        finish: '2023-04-04',
        links: ['2'],
        priority: 3,
        progress: 0,
      },
      {
        id: '2',
        title: 'Task 2',
        start: '2023-04-04',
        finish: '2023-04-15',
        priority: 3.5,
        progress: 0.3,
      },
      {
        id: '3',
        title: 'Task 3',
        start: '2023-01-31',
        finish: '2023-04-15',
        priority: 4,
        progress: 0.8,
      }
    ];
  }
}
