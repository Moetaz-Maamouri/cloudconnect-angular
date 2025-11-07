import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.active]="isOpen" (click)="onOverlayClick($event)">
      <div class="modal-container" [class.active]="isOpen">
        <button class="modal-close" (click)="close()">
          <i class="fas fa-times"></i>
        </button>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrl: './modal.css'
})
export class ModalComponent {
  @Input() modalId: string = '';
  @Output() closed = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  get isOpen() {
    return this.modalService.isOpen();
  }

  close() {
    this.modalService.close();
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }
}
