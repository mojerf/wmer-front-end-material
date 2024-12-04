import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton, MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [MatFormField, MatLabel, MatInput, MatSuffix, MatHint, MatButton, MatAnchor, RouterLink]
})
export class RegisterComponent {
  title = 'ثبت نام';
}
