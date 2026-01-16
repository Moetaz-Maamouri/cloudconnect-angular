import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PricingDivers } from '../../components/pricing-divers/pricing-divers';

@Component({
  selector: 'app-divers',
  imports: [CommonModule, RouterLink, PricingDivers],
  templateUrl: './divers.html',
  styleUrl: './divers.css',
  standalone: true
})
export class Divers {

}

