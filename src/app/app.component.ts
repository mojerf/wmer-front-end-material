import { Component } from '@angular/core';

const MENU = [
  {
    url: '',
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
  menu = MENU;
  logoUrl = 'logo-l.png';
  titleName = 'مجتبی عرفان راد';
  titleDesc = 'توسعه دهنده فول استک';
  themeIcon = 'contrast';

  showFiller = false;

  toggleTheme() {
    const bodyElement = document.getElementsByTagName('body')[0];
    const themeState = bodyElement.dataset['theme'];
    console.log(themeState);

    bodyElement.dataset['theme'] = themeState === 'light' ? 'dark' : 'light';
    this.themeIcon = themeState === 'light' ? 'light_mode' : 'dark_mode';
  }
}
