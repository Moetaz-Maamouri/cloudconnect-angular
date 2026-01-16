import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsHosting } from './vps-hosting';

describe('VpsHosting', () => {
  let component: VpsHosting;
  let fixture: ComponentFixture<VpsHosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VpsHosting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpsHosting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

