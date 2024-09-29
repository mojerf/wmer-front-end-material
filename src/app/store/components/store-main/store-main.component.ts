import { Component } from '@angular/core';

const PRODUCTS = [
  {
    title: 'قالب شخصی حرفه ای',
    url: '#',
    img: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    title: 'قالب شخصی حرفه ای',
    url: '#',
    img: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    title: 'قالب شخصی حرفه ای',
    url: '#',
    img: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    title: 'قالب شخصی حرفه ای',
    url: '#',
    img: 'product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
];

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrl: './store-main.component.scss',
})
export class StoreMainComponent {
  title = 'فروشگاه';
  products = PRODUCTS;
}
