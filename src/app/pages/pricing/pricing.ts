import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHostingPlan } from '../../components/web-hosting-plan/web-hosting-plan';
import { ServerPlans } from '../../components/server-plans/server-plans';
import { PricingVps } from '../../components/pricing-vps/pricing-vps';
import { PricingDivers } from '../../components/pricing-divers/pricing-divers';
import { SecurityPricing } from '../../components/security-pricing/security-pricing';
import { BackupPricing } from '../../components/backup-pricing/backup-pricing';
import { OutsourcingPricing } from '../../components/outsourcing-pricing/outsourcing-pricing';

type PricingCategory = 'all' | 'web-hosting' | 'control-panel' | 'backup' | 'security' | 'divers' | 'it-outsourcing' | 'vps';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, WebHostingPlan, ServerPlans, PricingVps, PricingDivers, SecurityPricing, BackupPricing, OutsourcingPricing],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
  activeCategory: PricingCategory = 'web-hosting';

  setCategory(category: PricingCategory) {
    this.activeCategory = category;
  }
}
