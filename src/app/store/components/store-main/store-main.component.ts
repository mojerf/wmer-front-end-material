import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

const PRODUCTS = [
  {
    id: 1,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'image/product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 2,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'image/product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 3,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'image/product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
  {
    id: 4,
    title: 'قالب شخصی حرفه ای',
    url: 'قالب-شخصی-حرفه-ای',
    image: 'image/product.jpg',
    date: '1403/07/06',
    commentCount: 10,
    price: 50000,
  },
];

@Component({
    selector: 'app-store-main',
    templateUrl: './store-main.component.html',
    styleUrl: './store-main.component.scss',
    imports: [MatTooltip, MatAnchor, RouterLink, PaginatorComponent]
})
export class StoreMainComponent {
  title = 'فروشگاه';
  products = PRODUCTS;
}
