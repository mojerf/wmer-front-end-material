import { Component } from '@angular/core';

const POSTS = [
  {
    id: 1,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'image/post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 2,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'image/post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 3,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'image/post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
  {
    id: 4,
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    url: 'تبدیل-قالب',
    image: 'image/post.jpg',
    date: '1403/07/06',
    commentCount: 10,
  },
];
@Component({
  selector: 'app-main-page-posts',
  templateUrl: './main-page-posts.component.html',
  styleUrl: './main-page-posts.component.scss',
})
export class MainPagePostsComponent {
  posts = POSTS;
}
