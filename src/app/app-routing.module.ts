import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
  {
    path: 'login',
    title: 'مجتبی عرفان راد | ورود',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'مجتبی عرفان راد | ثبت نام',
    component: RegisterComponent,
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
