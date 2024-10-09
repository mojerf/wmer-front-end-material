import { Component } from '@angular/core';
import { Order } from '../../models/order';

const ORDERS = [
  {
    id: 1,
    url: 'قالب-شخصی-حرفه-ای',
    image: 'image/product.jpg',
    title: 'قالب شخصی حرفه ای',
    price: 30000,
    downloadLink: '#',
  },
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: Order[] = ORDERS;
}
