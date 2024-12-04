import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { ModalData } from '../../models/modal';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-confirmation-modal',
    template: `
    <h2 mat-dialog-title>
      {{ this.modalData.title }}
    </h2>
    <mat-dialog-content [innerHTML]="this.modalData.description">
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>خیر</button>
      <button mat-button mat-dialog-close cdkFocusInitial (click)="confirm()">
        بله
      </button>
    </mat-dialog-actions>
  `,
    styles: `
  *{font-family:iransans !important;}
  :host{direction:rtl !important;}
  mat-dialog-content{overflow:hidden;}
  `,
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ConfirmationModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    protected modalData: ModalData,
    private dialogRef: MatDialogRef<ConfirmationModalComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }
}
