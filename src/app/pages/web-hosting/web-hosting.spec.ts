import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHosting } from './web-hosting';

describe('WebHosting', () => {
  let component: WebHosting;
  let fixture: ComponentFixture<WebHosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHosting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHosting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

