import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGanttChartComponent } from './ngx-gantt-chart/ngx-gantt-chart.component';
import {NgxGanttRoutingModule} from './ngx-gantt.routing.module';



@NgModule({
  declarations: [
    NgxGanttChartComponent
  ],
  imports: [
    NgxGanttRoutingModule,
    CommonModule
  ]
})
export class NgxGanttModule { }
