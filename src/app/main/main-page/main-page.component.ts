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
];

const POSTS = [
  {
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: '#',
    img: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: '#',
    img: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: '#',
    img: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: '#',
    img: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
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
  posts = POSTS;
}
