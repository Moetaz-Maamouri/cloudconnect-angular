import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from "../../components/hero-section/hero-section";
import { Features } from "../../components/features/features";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroSection, Features],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
