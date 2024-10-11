import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormComponent } from './work-form.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

describe('WorkFormComponent', () => {
  let component: WorkFormComponent;
  let fixture: ComponentFixture<WorkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkFormComponent],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatChipsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
