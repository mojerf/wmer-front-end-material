import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', redirectTo: 'login-register', pathMatch: 'full' },
  { path: 'register', redirectTo: 'login-register', pathMatch: 'full' },
  {
    path: 'login-register',
    component: LoginComponent,
    title: 'مجتبی عرفان راد | ورود - ثبت نام',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
