import { Component } from '@angular/core';

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
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrl: './posts-main.component.scss',
})
export class PostsMainComponent {
  title = 'نوشته ها';
  posts = POSTS
}
