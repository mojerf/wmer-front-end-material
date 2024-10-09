import { Component } from '@angular/core';

const WORKS = [
  {
    id: 1,
    url: 'سایت-شخصی',
    title: 'سایت شخصی',
  },
];

@Component({
  selector: 'app-dashboard-works',
  templateUrl: './dashboard-works.component.html',
  styleUrl: './dashboard-works.component.scss',
})
export class DashboardWorksComponent {
  works = WORKS;
}
