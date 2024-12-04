import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { MatChipsModule } from '@angular/material/chips';

import { WorkPageComponent } from './components/work-page/work-page.component';
import { WorksRoutingModule } from './works-routing.module';

@NgModule({
    imports: [CommonModule, MatChipsModule, WorksRoutingModule, WorkMainComponent, WorkPageComponent],
})
export class WorksModule {}
