import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MainModule } from './app/main/main.module';
import { WorksModule } from './app/works/works.module';
import { PostsModule } from './app/posts/posts.module';
import { StoreModule } from './app/store/store.module';
import { DashboardModule } from './app/dashboard/dashboard.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(MainModule, WorksModule, PostsModule, StoreModule, DashboardModule, BrowserModule, AppRoutingModule, MatRippleModule, MatButtonModule, MatSidenavModule, MatTooltipModule, MatDividerModule, MatBadgeModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatProgressBarModule),
        provideAnimationsAsync(), provideHttpClient(withFetch()),
    ]
})
  .catch(err => console.error(err));
