import { Component } from '@angular/core';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

const WORKS = [
  {
    id: 1,
    url: 'سایت-شخصی',
    title: 'سایت شخصی',
  },
];

@Component({
  selector: 'app-dashboard-works',
  templateUrl: './dashboard-works.component.html',
  styleUrl: './dashboard-works.component.scss',
})
export class DashboardWorksComponent {
  works = WORKS;

  constructor(private dialog: MatDialog) {}

  deleteWorkModal(id: number, title: string) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '22rem',
      data: {
        title: 'پاک کردن نمونه کار',
        description: `آیا میخواهید نمونه کار <b>${title}</b> را پاک کنید؟`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteWork(id);
      }
    });
  }

  deleteWork(id: number) {
    console.log('Deleting work with id:', id);
  }
}
