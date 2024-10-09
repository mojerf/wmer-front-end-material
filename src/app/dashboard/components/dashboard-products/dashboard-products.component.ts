import { Component } from '@angular/core';

const PRODUCTS = [
  {
    id: 1,
    url: 'قالب-شخصی-حرفه-ای',
    title: 'قالب شخصی حرفه ای',
  },
];

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.scss',
})
export class DashboardProductsComponent {
  products = PRODUCTS;
}
