import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: '',
    title: 'مجتبی عرفان راد | پنل کاربری',
    component: DashboardTemplateComponent,
    children: [
      {
        path: '',
        title: 'مجتبی عرفان راد | پنل کاربری',
        component: DashboardMainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
