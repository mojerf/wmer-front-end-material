import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMainComponent } from './work-main.component';

describe('WorkMainComponent', () => {
  let component: WorkMainComponent;
  let fixture: ComponentFixture<WorkMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
