import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStoreComponent } from './main-page-store.component';

describe('MainPageStoreComponent', () => {
  let component: MainPageStoreComponent;
  let fixture: ComponentFixture<MainPageStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
