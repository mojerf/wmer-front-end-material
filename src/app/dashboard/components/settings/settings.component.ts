import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [FormsModule, MatFormField, MatLabel, MatInput, MatButton]
})
export class SettingsComponent {
  firstName = 'مجتبی';
  lastName = 'عرفان راد';
  email = 'mojerf@yahoo.com';
  phoneNumber = '09134456735';
}
