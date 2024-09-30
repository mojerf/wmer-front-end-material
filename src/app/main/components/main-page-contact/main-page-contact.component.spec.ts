import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageContactComponent } from './main-page-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainPageContactComponent', () => {
  let component: MainPageContactComponent;
  let fixture: ComponentFixture<MainPageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageContactComponent],
      imports: [MatFormFieldModule, MatInputModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
