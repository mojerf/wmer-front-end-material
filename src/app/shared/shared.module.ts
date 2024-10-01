import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [PaginatorComponent, NotificationComponent],
  imports: [CommonModule, MatRipple, MatTooltipModule],
  exports: [PaginatorComponent, NotificationComponent],
})
export class SharedModule {}
