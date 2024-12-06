import { Component } from '@angular/core';
import { Menu } from '../../../shared/models/menu';

const MENU: Menu[] = [
  {
    url: '',
    icon: 'dashboard',
    name: 'پنل کاربری',
    exact: true,
  },
  {
    url: 'orders',
    icon: 'payments',
    name: 'سفارشات',
    exact: false,
  },
  {
    url: 'works',
    icon: 'work',
    name: 'نمونه کار ها',
    exact: false,
  },
  {
    url: 'posts',
    icon: 'description',
    name: 'نوشته ها',
    exact: false,
  },
  {
    url: 'products',
    icon: 'store',
    name: 'محصولات',
    exact: false,
  },
  {
    url: 'sales',
    icon: 'monitoring',
    name: 'فروش',
    exact: false,
  },
  {
    url: 'settings',
    icon: 'settings',
    name: 'اطلاعات کاربری',
    exact: false,
  },
];

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.scss',
})
export class DashboardTemplateComponent {
  title = 'پنل کاربری';
  needCard = false;
  menu = MENU;
}
