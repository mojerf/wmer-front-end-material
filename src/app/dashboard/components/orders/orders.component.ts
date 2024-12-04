import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';

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
    imports: [RouterLink, MatTooltip]
})
export class OrdersComponent {
  orders: Order[] = ORDERS;
}
