import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { WorkMainComponent } from './works/components/work-main/work-main.component';
import { StoreMainComponent } from './store/components/store-main/store-main.component';
import { PostsMainComponent } from './posts/components/posts-main/posts-main.component';
import { PostPageComponent } from './posts/components/post-page/post-page.component';
import { WorkPageComponent } from './works/components/work-page/work-page.component';
import { ProductPageComponent } from './store/components/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'مجتبی عرفان راد | طراحی و برنامه نویسی وب اپلیکیشن',
  },
  {
    path: 'works',
    title: 'مجتبی عرفان راد | نمونه کار ها',
    children: [
      {
        path: '',
        component: WorkMainComponent,
        title: 'مجتبی عرفان راد | نمونه کار ها',
      },
      {
        path: ':slug',
        component: WorkPageComponent,
        title: 'مجتبی عرفان راد | نمونه کار',
      },
    ],
  },
  {
    path: 'posts',
    title: 'مجتبی عرفان راد | نوشته ها',
    children: [
      {
        path: '',
        component: PostsMainComponent,
        title: 'مجتبی عرفان راد | نوشته ها',
      },
      {
        path: ':slug',
        component: PostPageComponent,
        title: 'مجتبی عرفان راد | نوشته',
      },
    ],
  },
  {
    path: 'store',
    component: StoreMainComponent,
    title: 'مجتبی عرفان راد | فروشگاه',
    children: [
      {
        path: '',
        component: StoreMainComponent,
        title: 'مجتبی عرفان راد | فروشگاه',
      },
      {
        path: ':slug',
        component: ProductPageComponent,
        title: 'مجتبی عرفان راد | محصول',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
