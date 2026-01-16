import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

interface WebHostingPlanType {
  name: string;
  price: string;
  features: string[];
  best?: boolean;
}

@Component({
  selector: 'app-web-hosting-plan',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './web-hosting-plan.html',
  styleUrl: './web-hosting-plan.css',
  standalone: true
})
export class WebHostingPlan {
  plans: WebHostingPlanType[] = [
    {
      name: 'Basic',
      price: '$5/mo',
      features: [
        '1 Website',
        '10 GB Storage',
        'Free SSL Certificate',
        'Email Support'
      ]
    },
    {
      name: 'Standard',
      price: '$10/mo',
      features: [
        '5 Websites',
        '50 GB Storage',
        'Free SSL + Email Support',
        '24/7 Customer Service'
      ],
      best: true
    },
    {
      name: 'Premium',
      price: '$20/mo',
      features: [
        'Unlimited Websites',
        '200 GB Storage',
        'Free SSL + Email Support',
        'Priority Support'
      ]
    }
  ];
  custom = {
    os: "linux",
    ram: 4,
    storage: 100,
    cpu: 2
  };
  Summary = "";

  ramOptions = [2, 4, 8, 16, 32];
  cpuOptions = [1, 2, 4, 8];

  services = [
    { name: "ssl", label: "SSL Certificate", price: 2, selected: false },
    { name: "email", label: "Email Hosting", price: 3, selected: false },
    { name: "backup", label: "Daily Backup", price: 4, selected: false },
    { name: "monitor", label: "Server Monitoring", price: 5, selected: false },
  ];

  get selectedServices() {
    return this.services.filter(s => s.selected);
  }

  get totalPrice() {
    let price = 0;

    // Base prices
    price += this.custom.ram * 1;       // $1 per GB RAM
    price += this.custom.storage * 0.05; // $0.05 per GB storage
    price += this.custom.cpu * 2;        // $2 per CPU core

    // OS extra cost
    if (this.custom.os === "windows") {
      price += 5; // Windows license
    }

    // Additional services
    this.services.forEach(s => {
      if (s.selected) price += s.price;
    });

    return price.toFixed(2);
  }

  get configurationSummary() {
    const parts: string[] = [];
    
    parts.push(`${this.custom.os.charAt(0).toUpperCase() + this.custom.os.slice(1)} OS`);
    parts.push(`${this.custom.ram} GB RAM`);
    parts.push(`${this.custom.storage} GB Storage`);
    parts.push(`${this.custom.cpu} CPU Core${this.custom.cpu > 1 ? 's' : ''}`);
    
    if (this.selectedServices.length > 0) {
      const servicesList = this.selectedServices.map(s => s.label).join(', ');
      parts.push(`+ ${servicesList}`);
    }
    
    return parts.join(' • ');
  }
}

