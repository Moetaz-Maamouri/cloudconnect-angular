import { Component } from '@angular/core';
import { ServerPlans } from '../server-plans/server-plans';

@Component({
  selector: 'app-hosting',
  imports: [ServerPlans],
  templateUrl: './hosting.html',
  styleUrl: './hosting.css',
})
export class Hosting {

}
