import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';

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

  constructor(private dialog: MatDialog) {}

  deletePostModal(id: number, title: string) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '22rem',
      data: {
        title: 'پاک کردن نوشته',
        description: `آیا میخواهید نوشته <b>${title}</b> را پاک کنید؟`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletePost(id);
      }
    });
  }

  deletePost(id: number) {
    console.log('Deleting post with id:', id);
  }
}
