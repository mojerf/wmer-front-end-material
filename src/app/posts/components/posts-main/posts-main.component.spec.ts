import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMainComponent } from './posts-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

describe('PostsMainComponent', () => {
  let component: PostsMainComponent;
  let fixture: ComponentFixture<PostsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsMainComponent],
      imports: [SharedModule, MatTooltipModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
