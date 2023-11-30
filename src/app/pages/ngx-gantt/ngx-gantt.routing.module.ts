import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxGanttChartComponent} from './ngx-gantt-chart/ngx-gantt-chart.component';

const routes: Routes = [
  { path: '', component: NgxGanttChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxGanttRoutingModule {}
