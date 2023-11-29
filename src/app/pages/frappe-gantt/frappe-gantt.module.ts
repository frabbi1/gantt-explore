import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrappeGanttChartComponent } from './frappe-gantt-chart/frappe-gantt-chart.component';
import {FrappeGanttRoutingModule} from './frappe-gantt-routing.module';



@NgModule({
  declarations: [
    FrappeGanttChartComponent
  ],
  imports: [
    FrappeGanttRoutingModule,
    CommonModule
  ]
})
export class FrappeGanttModule { }
