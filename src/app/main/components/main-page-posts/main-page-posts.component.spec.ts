import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePostsComponent } from './main-page-posts.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

describe('MainPagePostsComponent', () => {
  let component: MainPagePostsComponent;
  let fixture: ComponentFixture<MainPagePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPagePostsComponent],
      imports: [MatTooltipModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
