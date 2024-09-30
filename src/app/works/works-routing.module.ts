import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkMainComponent } from './components/work-main/work-main.component';
import { WorkPageComponent } from './components/work-page/work-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkMainComponent,
    title: 'مجتبی عرفان راد | نمونه کار ها',
  },
  {
    path: ':slug',
    component: WorkPageComponent,
    title: 'مجتبی عرفان راد | نمونه کار',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
