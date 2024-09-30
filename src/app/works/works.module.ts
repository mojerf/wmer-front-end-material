import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../shared/shared.module';
import { WorkPageComponent } from './components/work-page/work-page.component';
import { WorksRoutingModule } from './works-routing.module';

@NgModule({
  declarations: [WorkMainComponent, WorkPageComponent],
  imports: [CommonModule, MatChipsModule, SharedModule, WorksRoutingModule],
})
export class WorksModule {}
