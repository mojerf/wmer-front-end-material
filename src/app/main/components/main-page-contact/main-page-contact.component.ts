import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-main-page-contact',
    templateUrl: './main-page-contact.component.html',
    styleUrl: './main-page-contact.component.scss',
    imports: [MatFormField, MatLabel, MatInput, MatSuffix, MatHint, MatButton]
})
export class MainPageContactComponent {
  contactMe = {
    message:
      '<p>سلام، وقت بخیر.</p><p>لطفا پس از شنیدن صدای بوق پیغام خود را بگذارید.</p><strong>*بیب*</strong>',
    email: 'info@wmer.ir',
    phoneNumber: '09134456735',
  };
}
