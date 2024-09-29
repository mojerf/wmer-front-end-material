import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MatRipple, MatTooltipModule],
  exports: [PaginatorComponent],
})
export class SharedModule {}
