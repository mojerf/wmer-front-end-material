import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorksComponent } from './dashboard-works.component';
import { RouterModule } from '@angular/router';

describe('DashboardWorksComponent', () => {
  let component: DashboardWorksComponent;
  let fixture: ComponentFixture<DashboardWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([]), DashboardWorksComponent],
}).compileComponents();

    fixture = TestBed.createComponent(DashboardWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
