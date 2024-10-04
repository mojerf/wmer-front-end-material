import { Component, OnInit } from '@angular/core';
import { CartItem } from './shared/model/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './shared/services/notification/notification.service';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { CartService } from './shared/services/cart/cart.service';

const MENU = [
  {
    url: '',
    icon: 'home',
    name: 'صفحه اصلی',
    exact: true,
  },
  {
    url: 'works',
    icon: 'work',
    name: 'نمونه کار ها',
    exact: false,
  },
  {
    url: 'posts',
    icon: 'description',
    name: 'نوشته ها',
    exact: false,
  },
  {
    url: 'store',
    icon: 'store',
    name: 'فروشگاه',
    exact: false,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  menu = MENU;
  logoUrl = 'image/logo-l.png';
  titleName = 'مجتبی عرفان راد';
  titleDesc = 'توسعه دهنده فول استک';
  themeIcon = 'contrast';
  pageTitle = 'صفحه اصلی';
  needCard = false;

  cartItems: CartItem[] = [];
  cartItemCount = 0;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification) => {
      this.snackBar.openFromComponent(NotificationComponent, {
        data: notification.message,
        panelClass: notification.isSuccess
          ? ['notification-class-success']
          : ['notification-class-danger'],
        duration: 2000,
      });
    });

    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.cartItemCount = data.length;
    });
    this.cartService.getCartItems();
  }

  onActivate($event: { title: string; needCard?: boolean }) {
    this.pageTitle = $event.title;
    this.needCard =
      $event.needCard || $event.needCard === false ? $event.needCard : true;
  }

  toggleTheme() {
    const bodyElement = document.getElementsByTagName('body')[0];
    const themeState = bodyElement.dataset['theme'];

    bodyElement.dataset['theme'] = themeState === 'light' ? 'dark' : 'light';
    this.themeIcon = themeState === 'light' ? 'light_mode' : 'dark_mode';
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
