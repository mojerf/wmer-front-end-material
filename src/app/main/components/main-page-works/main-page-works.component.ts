import { Component } from '@angular/core';

const WORKS = [
  {
    id: 1,
    title: 'سایت شخصی',
    tags: ['Angular', 'Laravel', 'TS'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 2,
    title: 'سایت فروشگاهی',
    tags: ['Sass', 'TS', 'Laravel'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 3,
    title: 'اتوماسیون اداری',
    tags: ['Angular', 'Laravel'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 4,
    title: 'سایت دانلود فیلم',
    tags: ['HTML', 'CSS', 'PHP'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
];

@Component({
  selector: 'app-main-page-works',
  templateUrl: './main-page-works.component.html',
  styleUrl: './main-page-works.component.scss',
})
export class MainPageWorksComponent {
  works = WORKS;
}
