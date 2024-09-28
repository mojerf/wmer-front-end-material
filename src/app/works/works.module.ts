import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WorkMainComponent],
  imports: [CommonModule, MatChipsModule, SharedModule],
})
export class WorksModule {}
