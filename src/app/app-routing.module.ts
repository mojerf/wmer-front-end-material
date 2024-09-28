import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { WorkMainComponent } from './works/components/work-main/work-main.component';
import { StoreMainComponent } from './store/components/store-main/store-main.component';
import { PostsMainComponent } from './posts/components/posts-main/posts-main.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'مجتبی عرفان راد | طراحی و برنامه نویسی وب اپلیکیشن',
  },
  {
    path: 'works',
    component: WorkMainComponent,
    title: 'مجتبی عرفان راد | نمونه کار ها',
  },
  {
    path: 'posts',
    component: PostsMainComponent,
    title: 'مجتبی عرفان راد | نوشته ها',
  },
  {
    path: 'store',
    component: StoreMainComponent,
    title: 'مجتبی عرفان راد | فروشگاه',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
