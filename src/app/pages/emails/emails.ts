import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface EmailPlan {
  title: string;
  promoPrice: string;
  normalPrice: string;
  term: string;
  mailboxesIncluded: string;
  storage: string;
  forwardingRules: string;
  aliases: string;
  emailLimit: string;
  isRecommended?: boolean;
  features: string[];
}

@Component({
  selector: 'app-emails',
  templateUrl: './emails.html',
  styleUrls: ['./emails.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class EmailsComponent implements OnInit {

 emailPlans: EmailPlan[] = [];

  ngOnInit(): void {
    this.emailPlans = [
      {
        title: 'Starter Business Email',
        promoPrice: '$0.35/mo',
        normalPrice: '$1.59/mo',
        term: '48‑mo term',
        mailboxesIncluded: '1 mailbox',
        storage: '10 GB storage',
        forwardingRules: '10 forwarding rules',
        aliases: '10 email aliases',
        emailLimit: '1,000 emails/day',
        features: [
          'Spam & virus protection',
          'Access email on any device',
          'Webmail & audit logs',
          'Auto‑reply & forwarding',
        ]
      },
      {
        title: 'Premium Business Email Deal',
        promoPrice: '$1.56/mo',
        normalPrice: '$3.99/mo',
        term: '48‑mo term',
        mailboxesIncluded: '5 for price of 4',
        storage: '50 GB storage',
        forwardingRules: '50 forwarding rules',
        aliases: '30 email aliases',
        emailLimit: '3,000 emails/day',
        isRecommended: true,
        features: [
          'Free domain for 1 year',
          'AI mail assistant & smart replies',
          'Advanced webmail inbox',
          'Enhanced AI‑powered summaries'
        ]
      },
      {
        title: 'Premium Business Email',
        promoPrice: '$1.95/mo',
        normalPrice: '$3.99/mo',
        term: '48‑mo term',
        mailboxesIncluded: '1 mailbox',
        storage: '50 GB storage',
        forwardingRules: '50 forwarding rules',
        aliases: '30 email aliases',
        emailLimit: '3,000 emails/day',
        features: [
          'Spam & virus protection',
          'Access email on any device',
          'Auto‑reply & forwarding',
          'AI mail assistant'
        ]
      }
    ];
  }

}
