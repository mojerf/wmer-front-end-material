import { Component } from '@angular/core';

const POSTS = [
  {
    id: 1,
    url: 'تبدیل-قالب',
    title: 'تبدیل قالب html به وردپرس با pinegrow',
  },
];

@Component({
  selector: 'app-dashboard-posts',
  templateUrl: './dashboard-posts.component.html',
  styleUrl: './dashboard-posts.component.scss',
})
export class DashboardPostsComponent {
  posts = POSTS;
}
