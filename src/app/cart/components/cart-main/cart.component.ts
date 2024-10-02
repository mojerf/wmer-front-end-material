import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../shared/model/cart';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.cartItemCount = data.length;
    });
    this.cartService.getCartItems();
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
