import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'مجتبی عرفان راد | طراحی و برنامه نویسی وب اپلیکیشن',
  },
  {
    path: 'works',
    title: 'مجتبی عرفان راد | نمونه کار ها',
    loadChildren: () =>
      import('./works/works.module').then((m) => m.WorksModule),
  },
  {
    path: 'posts',
    title: 'مجتبی عرفان راد | نوشته ها',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'store',
    title: 'مجتبی عرفان راد | فروشگاه',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'cart',
    title: 'مجتبی عرفان راد | سبد خرید',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
