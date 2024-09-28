import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { WorkMainComponent } from './works/work-main/work-main.component';

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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
