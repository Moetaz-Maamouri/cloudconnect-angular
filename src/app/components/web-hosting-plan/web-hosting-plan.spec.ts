import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingPlan } from './web-hosting-plan';

describe('WebHostingPlan', () => {
  let component: WebHostingPlan;
  let fixture: ComponentFixture<WebHostingPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHostingPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHostingPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

