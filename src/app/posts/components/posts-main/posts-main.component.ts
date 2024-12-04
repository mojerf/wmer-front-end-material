import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

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
    selector: 'app-posts-main',
    templateUrl: './posts-main.component.html',
    styleUrl: './posts-main.component.scss',
    imports: [MatTooltip, MatAnchor, RouterLink, PaginatorComponent]
})
export class PostsMainComponent {
  title = 'نوشته ها';
  posts = POSTS;
}
