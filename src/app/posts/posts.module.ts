import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatButtonModule } from '@angular/material/button';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
    imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    PostsRoutingModule,
    PostsMainComponent, PostPageComponent,
],
})
export class PostsModule {}
