import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingPricing } from './outsourcing-pricing';

describe('OutsourcingPricing', () => {
  let component: OutsourcingPricing;
  let fixture: ComponentFixture<OutsourcingPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsourcingPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcingPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

