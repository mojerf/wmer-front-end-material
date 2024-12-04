import { Component } from '@angular/core';
import { MainPageAboutComponent } from '../main-page-about/main-page-about.component';
import { MainPageWorksComponent } from '../main-page-works/main-page-works.component';
import { MainPagePostsComponent } from '../main-page-posts/main-page-posts.component';
import { MainPageStoreComponent } from '../main-page-store/main-page-store.component';
import { MainPageContactComponent } from '../main-page-contact/main-page-contact.component';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [MainPageAboutComponent, MainPageWorksComponent, MainPagePostsComponent, MainPageStoreComponent, MainPageContactComponent]
})
export class MainPageComponent {
  title = 'صفحه اصلی';
}
