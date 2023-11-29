import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FrappeGanttChartComponent} from './frappe-gantt-chart/frappe-gantt-chart.component';

const routes: Routes = [
  { path: '', component: FrappeGanttChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrappeGanttRoutingModule {}
