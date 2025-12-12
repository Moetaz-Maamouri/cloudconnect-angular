import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private router = inject(Router);
  private displaySubject = new BehaviorSubject<boolean>(false);
  private activeModalSubject = new BehaviorSubject<string>('');

  display$ = this.displaySubject.asObservable();
  activeModal$ = this.activeModalSubject.asObservable();

  open(modalId: string) {
    // On mobile, redirect to the dedicated auth page instead of opening the modal
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.router.navigate(['/signin']);
      return;
    }

    this.activeModalSubject.next(modalId);
    this.displaySubject.next(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  close() {
    this.displaySubject.next(false);
    this.activeModalSubject.next('');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  isOpen() {
    return this.displaySubject.value;
  }
}
