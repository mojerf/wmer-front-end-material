import { Component } from '@angular/core';

const WORKS = [
  {
    name: 'سایت شخصی',
    tags: ['Angular', 'Laravel', 'TS'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت فروشگاهی',
    tags: ['Sass', 'TS', 'Laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'اتوماسیون اداری',
    tags: ['Angular', 'Laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت دانلود فیلم',
    tags: ['HTML', 'CSS', 'PHP'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت شخصی',
    tags: ['Angular', 'Laravel', 'TS'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت فروشگاهی',
    tags: ['Sass', 'TS', 'Laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'اتوماسیون اداری',
    tags: ['Angular', 'Laravel'],
    image: 'website_screenshot.png',
    url: '#',
  },
  {
    name: 'سایت دانلود فیلم',
    tags: ['HTML', 'CSS', 'PHP'],
    image: 'website_screenshot.png',
    url: '#',
  },
];

@Component({
  selector: 'app-work-main',
  templateUrl: './work-main.component.html',
  styleUrl: './work-main.component.scss',
})
export class WorkMainComponent {
  title = 'نمونه کار ها';
  works = WORKS;
}
