import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingVps } from '../../components/pricing-vps/pricing-vps';

@Component({
  selector: 'app-vps-hosting',
  imports: [CommonModule, PricingVps],
  templateUrl: './vps-hosting.html',
  styleUrl: './vps-hosting.css',
  standalone: true
})
export class VpsHosting {

}

