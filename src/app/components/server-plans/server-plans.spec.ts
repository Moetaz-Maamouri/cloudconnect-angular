import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPlans } from './server-plans';

describe('ServerPlans', () => {
  let component: ServerPlans;
  let fixture: ComponentFixture<ServerPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerPlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerPlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

