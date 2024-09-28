import { Component } from '@angular/core';

const MENU = [
  {
    url: '',
    icon: 'home',
    name: 'صفحه اصلی',
    exact: true,
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
    url: 'store',
    icon: 'store',
    name: 'فروشگاه',
    exact: false,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menu = MENU;
  logoUrl = 'logo-l.png';
  titleName = 'مجتبی عرفان راد';
  titleDesc = 'توسعه دهنده فول استک';
  themeIcon = 'contrast';
  pageTitle = 'صفحه اصلی';

  showFiller = false;

  onActivate($event: { title: string }) {
    this.pageTitle = $event.title;
  }

  toggleTheme() {
    const bodyElement = document.getElementsByTagName('body')[0];
    const themeState = bodyElement.dataset['theme'];

    bodyElement.dataset['theme'] = themeState === 'light' ? 'dark' : 'light';
    this.themeIcon = themeState === 'light' ? 'light_mode' : 'dark_mode';
  }
}
