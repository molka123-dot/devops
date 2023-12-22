import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPtoductsComponent } from './all-ptoducts.component';

describe('AllPtoductsComponent', () => {
  let component: AllPtoductsComponent;
  let fixture: ComponentFixture<AllPtoductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPtoductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPtoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
