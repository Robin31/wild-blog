import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/Message';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ButtonModule, RippleModule, InputTextModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit() {
    console.log(this.newMessage);
  }
}
