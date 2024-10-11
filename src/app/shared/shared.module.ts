import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PaginatorComponent,
    NotificationComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    CommonModule,
    MatRipple,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    PaginatorComponent,
    NotificationComponent,
    ConfirmationModalComponent,
  ],
})
export class SharedModule {}
