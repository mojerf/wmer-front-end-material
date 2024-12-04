import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStoreComponent } from './main-page-store.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

describe('MainPageStoreComponent', () => {
  let component: MainPageStoreComponent;
  let fixture: ComponentFixture<MainPageStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatTooltipModule, RouterModule.forRoot([]), MainPageStoreComponent],
}).compileComponents();

    fixture = TestBed.createComponent(MainPageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
