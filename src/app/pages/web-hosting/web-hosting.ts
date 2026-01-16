import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WebHostingPlan } from '../../components/web-hosting-plan/web-hosting-plan';

@Component({
  selector: 'app-web-hosting',
  imports: [CommonModule, RouterLink, WebHostingPlan],
  templateUrl: './web-hosting.html',
  styleUrl: './web-hosting.css',
  standalone: true
})
export class WebHosting {

}

