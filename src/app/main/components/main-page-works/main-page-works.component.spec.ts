import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWorksComponent } from './main-page-works.component';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

describe('MainPageWorksComponent', () => {
  let component: MainPageWorksComponent;
  let fixture: ComponentFixture<MainPageWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatChipsModule, RouterModule.forRoot([]), MainPageWorksComponent],
}).compileComponents();

    fixture = TestBed.createComponent(MainPageWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
