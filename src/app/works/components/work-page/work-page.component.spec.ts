import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPageComponent } from './work-page.component';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('WorkPageComponent', () => {
  let component: WorkPageComponent;
  let fixture: ComponentFixture<WorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        RouterModule.forRoot([]),
        MatChipsModule,
        SharedModule,
        NoopAnimationsModule,
        WorkPageComponent,
    ],
}).compileComponents();

    fixture = TestBed.createComponent(WorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
