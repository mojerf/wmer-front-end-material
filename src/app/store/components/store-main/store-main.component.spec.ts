import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMainComponent } from './store-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

describe('StoreMainComponent', () => {
  let component: StoreMainComponent;
  let fixture: ComponentFixture<StoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreMainComponent],
      imports: [SharedModule, MatTooltipModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
