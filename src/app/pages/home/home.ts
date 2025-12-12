import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from "../../components/hero-section/hero-section";
import { Features } from "../../components/features/features";
import { Pricing } from "../pricing/pricing";
import { Contact } from "../contact/contact";
import {TrustedBy} from '../../components/trusted-by/trusted-by';
import { CustomerReviewsComponent } from "../../components/customer-reviews/customer-reviews";


@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroSection, Features, Pricing, Contact, TrustedBy, CustomerReviewsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
