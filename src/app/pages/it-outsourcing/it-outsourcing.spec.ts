import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOutsourcing } from './it-outsourcing';

describe('ItOutsourcing', () => {
  let component: ItOutsourcing;
  let fixture: ComponentFixture<ItOutsourcing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItOutsourcing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItOutsourcing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

