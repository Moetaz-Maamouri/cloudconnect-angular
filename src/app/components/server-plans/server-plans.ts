import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-server-plans',
  imports: [CommonModule, RouterLink],
  templateUrl: './server-plans.html',
  styleUrl: './server-plans.css',
  standalone: true
})
export class ServerPlans {

}

