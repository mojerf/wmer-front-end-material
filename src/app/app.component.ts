import { Component } from '@angular/core';

const MENU = [
  {
    url: '#',
    icon: 'home',
    name: 'صفحه اصلی',
  },
  {
    url: '#',
    icon: 'work',
    name: 'نمونه کار ها',
  },
  {
    url: '#',
    icon: 'description',
    name: 'پست ها',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wmer';

  menu = MENU;
}
