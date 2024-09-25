import { Component } from '@angular/core';

const WORKS = [
  {
    name: 'سایت شخصی',
    tags: ['angular', 'laravel', 'ts'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت فروشگاهی',
    tags: ['html', 'css', 'js', 'laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت فروشگاهی',
    tags: ['html', 'css', 'js', 'laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت فروشگاهی',
    tags: ['html', 'css', 'js', 'laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  aboutMeImage = 'programmer.jpg';
  currentYear = new Date().getFullYear();
  expYears = this.currentYear - 2015;
  age = this.currentYear - 2000;
  works = WORKS;
}
