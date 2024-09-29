import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { PostPageComponent } from './components/post-page/post-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [PostsMainComponent, PostPageComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    SharedModule,
    MatButtonModule,
    AppRoutingModule,
  ],
})
export class PostsModule {}