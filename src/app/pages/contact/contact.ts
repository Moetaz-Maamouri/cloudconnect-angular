import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true
})
export class Contact {
  contactData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Contact form submitted:', this.contactData);

    // Reset form after successful submission
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
