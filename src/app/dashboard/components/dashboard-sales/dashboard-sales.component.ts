import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const SALES = [
  {
    id: 1,
    url: 'تبدیل-قالب',
    title: 'تبدیل قالب html به وردپرس با pinegrow',
    buyer: 'مجتبی عرفان راد',
    price: 10000,
    date: 'دیروز',
  },
];

@Component({
    selector: 'app-dashboard-sales',
    templateUrl: './dashboard-sales.component.html',
    styleUrl: './dashboard-sales.component.scss',
    imports: [RouterLink]
})
export class DashboardSalesComponent {
  sales = SALES;
}
