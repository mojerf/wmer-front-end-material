import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { MainPageAboutComponent } from '../main-page-about/main-page-about.component';
import { MainPageContactComponent } from '../main-page-contact/main-page-contact.component';
import { MainPagePostsComponent } from '../main-page-posts/main-page-posts.component';
import { MainPageStoreComponent } from '../main-page-store/main-page-store.component';
import { MainPageWorksComponent } from '../main-page-works/main-page-works.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        MainPageAboutComponent,
        MainPageContactComponent,
        MainPagePostsComponent,
        MainPageStoreComponent,
        MainPageWorksComponent,
      ],
      imports: [
        MatChipsModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
