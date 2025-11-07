import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insecription } from './insecription';

describe('Insecription', () => {
  let component: Insecription;
  let fixture: ComponentFixture<Insecription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insecription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insecription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
