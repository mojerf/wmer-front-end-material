import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OrdersComponent } from './components/orders/orders.component';

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
      {
        path: 'orders',
        title: 'مجتبی عرفان راد | سفارشات',
        component: OrdersComponent,
      },
      {
        path: 'settings',
        title: 'مجتبی عرفان راد | اطلاعات کاربری',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
