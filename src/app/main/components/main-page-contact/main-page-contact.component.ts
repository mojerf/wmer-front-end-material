import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-contact',
  templateUrl: './main-page-contact.component.html',
  styleUrl: './main-page-contact.component.scss',
})
export class MainPageContactComponent {
  contactMe = {
    message:
      '<p>سلام، وقت بخیر.</p><p>لطفا پس از شنیدن صدای بوق پیغام خود را بگذارید.</p><strong>*بیب*</strong>',
    email: 'info@wmer.ir',
    phoneNumber: '09134456735',
  };
}
