import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 
//@Component({
//  selector: 'app-loginadm',
//  imports: [],
 // templateUrl: './loginadm.html',
 // styleUrl: './loginadm.css',
//})

@Component({
  selector: 'app-loginadm',
  standalone: true,
  templateUrl: './loginadm.html',
  imports: [
    CommonModule,   // *ngIf, *ngFor
    FormsModule     // ngModel
  ]
})





export class Loginadm {
username = '';
password = '';
message = 'input username';

login(event: Event) {
    event.preventDefault(); // Prevent default form behavior
    this.message = `input received username: "${this.username}" password: "${this.password}"`;
  }

  cancel(event: Event) {
    event.preventDefault();
    this.username = '';
    this.password = '';
    this.message = 'input username';
  }



}
