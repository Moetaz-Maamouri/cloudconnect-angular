import { Component} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-trusted-by',
  imports: [CarouselModule,CommonModule],
  templateUrl: './trusted-by.html',
  styleUrl: './trusted-by.css',
})
export class TrustedBy {

  companies = [
    { img: 'assets/logo_google.png', name: 'Google', description: 'Leading search engine' },
    { img: 'assets/Microsoft_Logo_512px.png', name: 'Microsoft', description: 'Software and cloud services' },
    { img: 'assets/amazon.png', name: 'Amazon', description: 'E-commerce and cloud solutions' },
    { img: 'assets/apple.png', name: 'Apple', description: 'Innovative tech products' },
    { img: 'assets/facebook-logo.png', name: 'Facebook', description: 'Social media platform' },
    { img: 'assets/netflix-logo.png', name: 'Netflix', description: 'Streaming entertainment' },
    { img: 'assets/slack-logo.png', name: 'Slack', description: 'Team communication tool' }
  ];


}
