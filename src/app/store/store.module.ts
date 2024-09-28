import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StoreMainComponent],
  imports: [CommonModule, MatTooltipModule, SharedModule, MatButtonModule],
})
export class StoreModule {}
