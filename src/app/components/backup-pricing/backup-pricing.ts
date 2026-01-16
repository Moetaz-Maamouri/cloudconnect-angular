import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BackupPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  best?: boolean;
}

@Component({
  selector: 'app-backup-pricing',
  imports: [CommonModule, RouterLink],
  templateUrl: './backup-pricing.html',
  styleUrl: './backup-pricing.css',
  standalone: true
})
export class BackupPricing {
  plans: BackupPlan[] = [
    {
      name: 'Basic Backup',
      price: '$4.99/month',
      description: 'Essential backup solution for small websites.',
      features: [
        'Daily Automated Backups',
        '7 Days Retention',
        'Basic Restore',
        'Email Notifications'
      ]
    },
    {
      name: 'Professional Backup',
      price: '$14.99/month',
      description: 'Comprehensive backup solution for businesses.',
      features: [
        'Hourly Automated Backups',
        '30 Days Retention',
        'One-Click Restore',
        'Cloud Storage',
        'Backup Encryption'
      ],
      best: true
    },
    {
      name: 'Enterprise Backup',
      price: '$39.99/month',
      description: 'Advanced backup solution for enterprise needs.',
      features: [
        'Real-time Backups',
        '90 Days Retention',
        'Multiple Restore Points',
        'Unlimited Cloud Storage',
        'Advanced Encryption',
        'Priority Support'
      ]
    }
  ];
}

