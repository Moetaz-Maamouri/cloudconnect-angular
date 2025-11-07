import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private displaySubject = new BehaviorSubject<boolean>(false);
  private activeModalSubject = new BehaviorSubject<string>('');

  display$ = this.displaySubject.asObservable();
  activeModal$ = this.activeModalSubject.asObservable();

  open(modalId: string) {
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
