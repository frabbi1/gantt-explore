import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxGanttChartComponent} from './components/ngx-gantt-chart/ngx-gantt-chart.component';
import {NgxGanttRoutingModule} from './ngx-gantt.routing.module';
import {GANTT_GLOBAL_CONFIG, GanttGlobalConfig, GanttLinkLineType, NgxGanttModule} from '@worktile/gantt';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import { TaskDetailsTemplateComponent } from './components/task-details-template/task-details-template.component';


@NgModule({
  declarations: [
    NgxGanttChartComponent,
    TaskDetailsTemplateComponent
  ],
  imports: [
    NgxGanttRoutingModule,
    CommonModule,
    NgxGanttModule,
    NzInputModule,
    ReactiveFormsModule,
    NzModalModule,
    NzButtonModule,
    NzPopoverModule,
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: <GanttGlobalConfig>{
        dateFormat: {
          month: 'MM',
          year: 'YYYY',
          week: 'WWW',
          quarter: '',
          yearMonth: 'YYYY MM',
          yearQuarter: `QQQ 'of' yyyy`
        },
        linkOptions: {
          showArrow: true,
          lineType: GanttLinkLineType.straight
        }
      }
    }
  ]
})
export class NgxGanttModuleApp { }
