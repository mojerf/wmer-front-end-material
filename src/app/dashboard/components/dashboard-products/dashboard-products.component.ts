import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatAnchor } from '@angular/material/button';

const PRODUCTS = [
  {
    id: 1,
    url: 'قالب-شخصی-حرفه-ای',
    title: 'قالب شخصی حرفه ای',
  },
];

@Component({
    selector: 'app-dashboard-products',
    templateUrl: './dashboard-products.component.html',
    styleUrl: './dashboard-products.component.scss',
    imports: [RouterLink, MatTooltip, MatAnchor]
})
export class DashboardProductsComponent {
  products = PRODUCTS;

  constructor(private dialog: MatDialog) {}

  deleteProductModal(id: number, title: string) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '22rem',
      data: {
        title: 'پاک کردن محصول',
        description: `آیا میخواهید محصول <b>${title}</b> را پاک کنید؟`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct(id);
      }
    });
  }

  deleteProduct(id: number) {
    console.log('Deleting product with id:', id);
  }
}
