import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';
import { ContactItemComponent } from "../contact-item/contact-item.component";

@Component({
  selector: 'app-contact-list',
  imports: [
    CommonModule,
    ContactItemComponent
],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  @Output() contactSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [
    new Contact(
      '1',
      'R. Kent Jackson',
      'jacksonk@byui.edu',
      '208-496-3771',
      '../../assets/images/jacksonk.jpg',
      []
    ),
    new Contact(
      "2",
      "Rex Barzee",
      "barzeer@byui.edu",
      "208-496-3768",
      "../../assets/images/barzeer.jpg",
      []
    )
  ]

  onSelected(contact: Contact) {
    this.contactSelected.emit(contact);
  }
}
