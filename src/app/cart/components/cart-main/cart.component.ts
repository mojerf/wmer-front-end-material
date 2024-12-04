import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../shared/models/cart';
import { CartService } from '../../../shared/services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [RouterLink, MatAnchor]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartItemCount = 0;
  sumPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.cartItemCount = data.length;
      this.sumPrice = data
        .map((x) => (x.newPrice ? x.newPrice : x.price))
        .reduce((accumulator, current) => accumulator + current);
    });
    this.cartService.getCartItems();
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
