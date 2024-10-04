import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-about',
  templateUrl: './main-page-about.component.html',
  styleUrl: './main-page-about.component.scss',
})
export class MainPageAboutComponent {
  aboutMeImage = 'image/programmer.jpg';
  currentYear = new Date().getFullYear();
  expYears = this.currentYear - 2015;
  age = this.currentYear - 2000;
}
