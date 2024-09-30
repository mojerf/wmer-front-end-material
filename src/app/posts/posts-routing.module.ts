import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { PostPageComponent } from './components/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsMainComponent,
    title: 'مجتبی عرفان راد | نوشته ها',
  },
  {
    path: ':slug',
    component: PostPageComponent,
    title: 'مجتبی عرفان راد | نوشته',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
