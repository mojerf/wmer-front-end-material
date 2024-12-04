import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalesComponent } from './dashboard-sales.component';
import { RouterModule } from '@angular/router';

describe('DashboardSalesComponent', () => {
  let component: DashboardSalesComponent;
  let fixture: ComponentFixture<DashboardSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([]), DashboardSalesComponent],
}).compileComponents();

    fixture = TestBed.createComponent(DashboardSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
