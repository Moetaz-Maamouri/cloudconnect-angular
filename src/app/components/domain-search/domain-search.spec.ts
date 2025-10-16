import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSearch } from './domain-search';

describe('DomainSearch', () => {
  let component: DomainSearch;
  let fixture: ComponentFixture<DomainSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
