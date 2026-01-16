import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailsComponent } from './emails';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmailsComponent', () => {
  let component: EmailsComponent;
  let fixture: ComponentFixture<EmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], // important for *ngFor
      declarations: [ EmailsComponent ],
      schemas: [NO_ERRORS_SCHEMA] // ignore unknown elements like bootstrap classes
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 pricing cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(component.emailPlans.length);
  });

  it('should show the plan title correctly', () => {
    const firstCardTitle = fixture.debugElement.query(By.css('.card .card-title')).nativeElement.textContent;
    expect(firstCardTitle).toContain(component.emailPlans[0].title);
  });

  it('should show the promo price for each plan', () => {
    const prices = fixture.debugElement.queryAll(By.css('.card-body .display-6'));
    prices.forEach((el, index) => {
      expect(el.nativeElement.textContent).toContain(component.emailPlans[index].promoPrice);
    });
  });

  it('should mark recommended plan with badge', () => {
    const recommendedBadges = fixture.debugElement.queryAll(By.css('.badge.bg-success'));
    expect(recommendedBadges.length).toBe(
      component.emailPlans.filter(plan => plan.isRecommended).length
    );
  });

  it('should list all features in card footer', () => {
    const footers = fixture.debugElement.queryAll(By.css('.card-footer ul li'));
    const totalFeatures = component.emailPlans.reduce((acc, plan) => acc + plan.features.length, 0);
    expect(footers.length).toBe(totalFeatures);
  });

  it('should have a button for each plan', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn'));
    expect(buttons.length).toBe(component.emailPlans.length);
    buttons.forEach(button => {
      expect(button.nativeElement.textContent).toContain('Choose Plan');
    });
  });

});
