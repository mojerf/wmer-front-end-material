import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  firstName = 'مجتبی';
  lastName = 'عرفان راد';
  email = 'mojerf@yahoo.com';
  phoneNumber = '09134456735';
}
