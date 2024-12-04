import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatButtonModule } from '@angular/material/button';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
    imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    StoreRoutingModule,
    StoreMainComponent, ProductPageComponent,
],
})
export class StoreModule {}
