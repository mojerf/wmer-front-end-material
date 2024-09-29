import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMainComponent } from './work-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

describe('WorkMainComponent', () => {
  let component: WorkMainComponent;
  let fixture: ComponentFixture<WorkMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkMainComponent],
      imports: [SharedModule, MatChipsModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
