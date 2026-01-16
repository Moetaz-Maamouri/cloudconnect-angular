import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingVps } from './pricing-vps';

describe('PricingVps', () => {
  let component: PricingVps;
  let fixture: ComponentFixture<PricingVps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingVps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingVps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

