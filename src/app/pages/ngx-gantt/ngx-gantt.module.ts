import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxGanttChartComponent} from './components/ngx-gantt-chart/ngx-gantt-chart.component';
import {NgxGanttRoutingModule} from './ngx-gantt.routing.module';
import {GANTT_GLOBAL_CONFIG, GanttGlobalConfig, GanttLinkLineType, NgxGanttModule} from '@worktile/gantt';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import { TaskDetailsTemplateComponent } from './components/task-details-template/task-details-template.component';
import { NgxGanttRootComponent } from './components/ngx-gantt-root/ngx-gantt-root.component';
import { NgxGanttTopToolbarComponent } from './components/ngx-gantt-top-toolbar/ngx-gantt-top-toolbar.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import { NgxGanttViewModeSelectorComponent } from './components/ngx-gantt-top-toolbar/ngx-gantt-view-mode-selector/ngx-gantt-view-mode-selector.component';
import {NzSegmentedModule} from 'ng-zorro-antd/segmented';
import {NzTypographyModule} from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [
    NgxGanttChartComponent,
    TaskDetailsTemplateComponent,
    NgxGanttRootComponent,
    NgxGanttTopToolbarComponent,
    NgxGanttViewModeSelectorComponent
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
    NzCardModule,
    NzSegmentedModule,
    NzTypographyModule,
    FormsModule,
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: <GanttGlobalConfig>{
        dateFormat: {
          month: 'MMM',
          year: 'yyyy',
          week: 'ww',
          quarter: 'QQQ',
          yearMonth: 'MMM yyyy',
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
