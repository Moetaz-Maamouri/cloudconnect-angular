import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPricing } from './security-pricing';

describe('SecurityPricing', () => {
  let component: SecurityPricing;
  let fixture: ComponentFixture<SecurityPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

