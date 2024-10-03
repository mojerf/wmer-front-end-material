import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.scss',
})
export class DashboardTemplateComponent {
  title = 'پنل کاربری';
  needCard = false;
}
