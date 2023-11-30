import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ngx-gantt' },
  { path: 'ngx-gantt', loadChildren: () => import('./pages/ngx-gantt/ngx-gantt.module').then(m => m.NgxGanttModule) },
  { path: 'frappe-gantt', loadChildren: () => import('./pages/frappe-gantt/frappe-gantt.module').then(m => m.FrappeGanttModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
