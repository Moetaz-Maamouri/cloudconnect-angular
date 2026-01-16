import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPricing } from './backup-pricing';

describe('BackupPricing', () => {
  let component: BackupPricing;
  let fixture: ComponentFixture<BackupPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

