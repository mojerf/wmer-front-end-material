import { Component } from '@angular/core';

const WORKS = [
  {
    id: 1,
    title: 'سایت شخصی',
    tags: ['Angular', 'Laravel', 'TS'],
    image: 'website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 2,
    title: 'سایت فروشگاهی',
    tags: ['Sass', 'TS', 'Laravel'],
    image: 'website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 3,
    title: 'اتوماسیون اداری',
    tags: ['Angular', 'Laravel'],
    image: 'website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 4,
    title: 'سایت دانلود فیلم',
    tags: ['HTML', 'CSS', 'PHP'],
    image: 'website_screenshot.png',
    url: 'سایت-شخصی',
  },
];

const POSTS = [
  {
    id: 1,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 2,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 3,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 4,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 2,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 3,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 4,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  title = 'صفحه اصلی';
  aboutMeImage = 'programmer.jpg';
  currentYear = new Date().getFullYear();
  expYears = this.currentYear - 2015;
  age = this.currentYear - 2000;
  works = WORKS;
  posts = POSTS;
  products = PRODUCTS;
}
