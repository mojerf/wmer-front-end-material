import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
