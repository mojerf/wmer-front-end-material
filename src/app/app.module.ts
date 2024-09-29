import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MainModule } from './main/main.module';
import { WorksModule } from './works/works.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MainModule,
    WorksModule,
    PostsModule,
    StoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
