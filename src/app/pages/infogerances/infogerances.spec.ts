import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infogerances } from './infogerances';

describe('Infogerances', () => {
  let component: Infogerances;
  let fixture: ComponentFixture<Infogerances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infogerances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infogerances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
