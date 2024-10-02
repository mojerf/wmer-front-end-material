import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, FullProduct } from '../../model/cart';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private notificationService: NotificationService) {}

  getCartItems(): CartItem[] {
    const localcart = localStorage.getItem('cart');
    let cart: CartItem[];
    if (!localcart) {
      cart = [];
    } else {
      cart = JSON.parse(localcart);
    }
    this.cartItems.next(cart);
    return cart;
  }

  addToCart(product: FullProduct, slug: string) {
    const cart = this.getCartItems();
    const cartProduct: CartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      priceBefore: product.priceBefore,
      price: product.price,
      url: slug,
    };
    const itemIndexFinder = cart.findIndex(
      (item) => item.id === cartProduct.id
    );

    if (itemIndexFinder >= 0) {
      this.notificationService.setNotification(
        'محصول در سبد خرید وجود دارد.',
        false
      );
      return;
    }

    cart.push(cartProduct);
    localStorage.setItem('cart', JSON.stringify(cart));

    this.cartItems.next(cart);
    this.notificationService.setNotification(
      'محصول با موفقیت به سبد خرید اضافه شد.',
      true
    );
  }

  removeFromCart(id: number) {
    const cart = this.getCartItems();
    const itemIndexFinder = cart.findIndex((item) => item.id === id);

    cart.splice(itemIndexFinder);
    localStorage.setItem('cart', JSON.stringify(cart));

    this.cartItems.next(cart);
    this.notificationService.setNotification(
      'محصول با موفقیت از سبد خرید حذف شد.',
      true
    );
  }
}
