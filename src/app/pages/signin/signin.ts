import { Component } from '@angular/core';
import { Insecription } from "../../components/insecription/insecription";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [Insecription],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  constructor(private modalService: ModalService) {}

  openAuthModal(type: 'signin' | 'signup') {
    this.modalService.open(type);
  }
}
