import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
    selector: 'app-notification',
    template: ` <span matSnackBarLabel>{{ this.message }}</span> `,
    styles: `
    :host {
      display: flex;
      color: white;
    }
  `
})
export class NotificationComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    protected message: string
  ) {}
}
