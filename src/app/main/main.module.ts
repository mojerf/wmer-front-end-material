import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';
import { MainPageAboutComponent } from './components/main-page-about/main-page-about.component';
import { MainPageWorksComponent } from './components/main-page-works/main-page-works.component';
import { MainPagePostsComponent } from './components/main-page-posts/main-page-posts.component';
import { MainPageStoreComponent } from './components/main-page-store/main-page-store.component';
import { MainPageContactComponent } from './components/main-page-contact/main-page-contact.component';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        MainPageComponent, MainPageAboutComponent, MainPageWorksComponent, MainPagePostsComponent, MainPageStoreComponent, MainPageContactComponent,
    ],
})
export class MainModule {}
