import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PaginatorComponent,
    NotificationComponent,
    ConfirmationModalComponent,
    CommentSectionComponent,
  ],
  imports: [
    CommonModule,
    MatRipple,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    PaginatorComponent,
    NotificationComponent,
    ConfirmationModalComponent,
    CommentSectionComponent,
  ],
})
export class SharedModule {}
