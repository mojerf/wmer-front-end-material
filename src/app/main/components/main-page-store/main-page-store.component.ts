import { Component } from '@angular/core';

const PRODUCTS = [
  {
    id: 1,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 2,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 3,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 4,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
];

@Component({
  selector: 'app-main-page-store',
  templateUrl: './main-page-store.component.html',
  styleUrl: './main-page-store.component.scss',
})
export class MainPageStoreComponent {
  products = PRODUCTS;
}
