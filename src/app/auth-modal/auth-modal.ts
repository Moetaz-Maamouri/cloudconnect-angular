import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './auth-modal.html',
  styleUrls: ['./auth-modal.css']
})
export class AuthModalComponent {
  
  @Input() isOpen = false;
  @Input() mode: 'signin' | 'signup' = 'signin'; 

  @Output() close = new EventEmitter<void>();

  showSignUp = false;

  ngOnChanges() {
    this.showSignUp = this.mode === 'signup';
  }

  closeModal() {
    this.close.emit();
  }

  toggleForm() {
    this.showSignUp = !this.showSignUp;
  }
}
