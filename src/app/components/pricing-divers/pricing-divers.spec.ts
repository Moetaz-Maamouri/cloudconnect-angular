import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingDivers } from './pricing-divers';

describe('PricingDivers', () => {
  let component: PricingDivers;
  let fixture: ComponentFixture<PricingDivers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingDivers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingDivers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

