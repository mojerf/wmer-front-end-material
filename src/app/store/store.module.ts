import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [StoreMainComponent, ProductPageComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    SharedModule,
    MatButtonModule,
    AppRoutingModule,
  ],
})
export class StoreModule {}