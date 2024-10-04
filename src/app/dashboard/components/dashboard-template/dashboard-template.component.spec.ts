import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTemplateComponent } from './dashboard-template.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

describe('DashboardTemplateComponent', () => {
  let component: DashboardTemplateComponent;
  let fixture: ComponentFixture<DashboardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTemplateComponent],
      imports: [MatRippleModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
