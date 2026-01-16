import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OutsourcingPricing } from '../../components/outsourcing-pricing/outsourcing-pricing';

@Component({
  selector: 'app-it-outsourcing',
  imports: [CommonModule, RouterLink, OutsourcingPricing],
  templateUrl: './it-outsourcing.html',
  styleUrl: './it-outsourcing.css',
  standalone: true
})
export class ItOutsourcing {

}

