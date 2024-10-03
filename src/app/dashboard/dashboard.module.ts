import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';

@NgModule({
  declarations: [DashboardMainComponent, DashboardTemplateComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
