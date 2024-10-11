import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DashboardWorksComponent } from './components/dashboard-works/dashboard-works.component';
import { DashboardPostsComponent } from './components/dashboard-posts/dashboard-posts.component';
import { DashboardProductsComponent } from './components/dashboard-products/dashboard-products.component';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
import { PostFormComponent } from './components/dashboard-posts/post-form/post-form.component';

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
      {
        path: 'works',
        title: 'مجتبی عرفان راد | نمونه کار ها',
        children: [
          {
            path: '',
            title: 'مجتبی عرفان راد | نمونه کار ها',
            component: DashboardWorksComponent,
          },
          {
            path: 'add-work',
            title: 'مجتبی عرفان راد | نوشته جدید',
            component: DashboardSalesComponent,
          },
        ],
      },
      {
        path: 'posts',
        title: 'مجتبی عرفان راد | نوشته ها',
        children: [
          {
            path: '',
            title: 'مجتبی عرفان راد | نوشته ها',
            component: DashboardPostsComponent,
          },
          {
            path: 'add-post',
            title: 'مجتبی عرفان راد | نوشته جدید',
            component: PostFormComponent,
          },
          {
            path: 'edit-post/:id',
            title: 'مجتبی عرفان راد | ویرایش  نوشته',
            component: PostFormComponent,
          },
        ],
      },
      {
        path: 'products',
        title: 'مجتبی عرفان راد | محصولات',
        children: [
          {
            path: '',
            title: 'مجتبی عرفان راد | محصولات',
            component: DashboardProductsComponent,
          },
          {
            path: 'add-product',
            title: 'مجتبی عرفان راد | نوشته جدید',
            component: DashboardSalesComponent,
          },
        ],
      },
      {
        path: 'sales',
        title: 'مجتبی عرفان راد | فروش',
        component: DashboardSalesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
