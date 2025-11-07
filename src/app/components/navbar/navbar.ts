import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Insecription } from "../insecription/insecription";
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Insecription, ModalComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    constructor(private modalService: ModalService) {}

    openAuthModal(type: 'signin' | 'signup') {
      this.modalService.open(type);
    }

}
