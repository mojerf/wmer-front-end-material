import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItem, fullProduct } from '../../model/cart';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<cartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private notificationService: NotificationService) {}

  getCartItems(): cartItem[] {
    const localcart = localStorage.getItem('cart');
    let cart: cartItem[];
    if (!localcart) {
      cart = [];
    } else {
      cart = JSON.parse(localcart);
    }
    this.cartItems.next(cart);
    return cart;
  }

  private addTolocalStorage(product: cartItem) {
    const cart = this.getCartItems();
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  addToCart(product: fullProduct, slug: string) {
    const cartProduct: cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      priceBefore: product.priceBefore,
      price: product.price,
      url: slug,
    };
    this.cartItems.next(this.addTolocalStorage(cartProduct));
    this.notificationService.setNotification(
      'محصول با موفقیت به سبد خرید اضافه شد.',
      true
    );
  }

  removeFromCart(id: number) {
    const items = this.getCartItems();
    items.splice(1);
  }
}
