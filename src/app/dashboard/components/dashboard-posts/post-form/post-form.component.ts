import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent {
  title = '';
  isHighlighted = false;
  wrongFormat = false;
  selectedFile!: File;

  highlight() {
    this.isHighlighted = true;
  }

  unhighlight() {
    this.isHighlighted = false;
  }
  readFile(event: Event) {
    // this.loadingService.setLoading(true);
    this.wrongFormat = false;
    this.isHighlighted = false;
    const target = event.target as HTMLInputElement;
    this.selectedFile = (target.files as FileList)[0];
    const fileName = this.selectedFile.name;
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    if (
      fileExtension !== 'png' &&
      fileExtension !== 'jpg' &&
      fileExtension !== 'jpeg'
    ) {
      this.wrongFormat = true;
      // this._snackBar.openFromComponent(DangerSuccessNotificationComponent, {
      //   data: 'Please upload a CSV file',
      //   panelClass: ['notification-class-danger'],
      //   duration: 2000,
      // });
      // this.loadingService.setLoading(false);
      return;
    }
  }
}
