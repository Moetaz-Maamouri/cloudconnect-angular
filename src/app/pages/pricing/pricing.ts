import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
custom = {
  os: "linux",
  ram: 4,
  storage: 100,
  cpu: 2
};

ramOptions = [2, 4, 8, 16, 32];
cpuOptions = [1, 2, 4, 8];

services = [
  { name: "ssl", label: "SSL Certificate", price: 2, selected: false },
  { name: "email", label: "Email Hosting", price: 3, selected: false },
  { name: "backup", label: "Daily Backup", price: 4, selected: false },
  { name: "monitor", label: "Server Monitoring", price: 5, selected: false },
];

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

}
