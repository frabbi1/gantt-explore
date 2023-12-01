import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxGanttRootComponent} from './components/ngx-gantt-root/ngx-gantt-root.component';

const routes: Routes = [
  { path: '', component: NgxGanttRootComponent },
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
