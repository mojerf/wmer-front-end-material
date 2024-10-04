import { Component } from '@angular/core';

const MENU = [
  {
    url: '',
    icon: 'dashboard',
    name: 'پنل کاربری',
    exact: true,
  },
  {
    url: 'purchase',
    icon: 'payments',
    name: 'سفارشات',
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
