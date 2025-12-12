import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Insecription } from '../components/insecription/insecription';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule, Insecription],
  standalone: true,
  templateUrl: './auth-modal.html',
  styleUrls: ['./auth-modal.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  mode: 'signin' | 'signup' = 'signin';

  private displaySub?: Subscription;
  private modeSub?: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.displaySub = this.modalService.display$.subscribe((open) => {
      this.isOpen = open;
      document.body.style.overflow = open ? 'hidden' : 'auto';
    });

    this.modeSub = this.modalService.activeModal$.subscribe((mode) => {
      if (mode === 'signin' || mode === 'signup') {
        this.mode = mode;
      }
    });
  }

  ngOnDestroy(): void {
    this.displaySub?.unsubscribe();
    this.modeSub?.unsubscribe();
  }

  closeModal() {
    this.modalService.close();
  }
}
