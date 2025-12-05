import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Insecription } from "../insecription/insecription";
import { ModalService } from '../../services/modal.service';
import { AuthModalComponent } from '../../auth-modal/auth-modal';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Insecription, AuthModalComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    constructor(private modalService: ModalService) {}

authModalOpen = false;
authMode: 'signin' | 'signup' = 'signin';

openAuthModal(mode: 'signin' | 'signup') {
  this.authMode = mode;
  this.authModalOpen = true;
}

closeAuthModal() {
  this.authModalOpen = false;
}


}
