import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  imports: [],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  contact: Contact;

  constructor() {
    this.contact = new Contact(
      'id',
      'name',
      'email',
      'phone number',
      'imgUrl',
      []
    )
  }
}
