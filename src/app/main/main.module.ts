import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MatChipsModule],
})
export class MainModule {}
