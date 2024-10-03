import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RiveModule } from 'ng-rive';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, UserRoutingModule, RiveModule],
})
export class UserModule {}
