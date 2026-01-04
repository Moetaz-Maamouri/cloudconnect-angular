import { Component } from '@angular/core';
import {Hosting} from '../../components/hosting/hosting';
import {Backup} from '../backup/backup';
import {Security} from '../security/security';

@Component({
  selector: 'app-services',
  imports: [
    Hosting,
    Backup,
    Security
  ],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
