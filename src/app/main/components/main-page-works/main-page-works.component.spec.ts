import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWorksComponent } from './main-page-works.component';

describe('MainPageWorksComponent', () => {
  let component: MainPageWorksComponent;
  let fixture: ComponentFixture<MainPageWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
