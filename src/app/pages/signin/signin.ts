import { Component } from '@angular/core';
import { Insecription } from "../../components/insecription/insecription";
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [Insecription, ModalComponent],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  constructor(private modalService: ModalService) {}

  openAuthModal(type: 'signin' | 'signup') {
    this.modalService.open(type);
  }
}
