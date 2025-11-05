import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from "../../components/hero-section/hero-section";
import { Features } from "../../components/features/features";
import { Pricing } from "../pricing/pricing";
import { Faq } from "../faq/faq";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroSection, Features, Pricing, Faq, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
