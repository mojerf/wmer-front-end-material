import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart-main/cart.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, CartRoutingModule, MatButtonModule, CartComponent],
})
export class CartModule {}
