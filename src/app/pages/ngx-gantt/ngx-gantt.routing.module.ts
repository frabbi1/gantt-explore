import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxGanttChartComponent} from './components/ngx-gantt-chart/ngx-gantt-chart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: NgxGanttChartComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class NgxGanttRoutingModule {}
