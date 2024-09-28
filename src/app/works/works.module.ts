import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkMainComponent } from './work-main/work-main.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WorkMainComponent],
  imports: [CommonModule, MatChipsModule, MatPaginatorModule, SharedModule],
})
export class WorksModule {}
