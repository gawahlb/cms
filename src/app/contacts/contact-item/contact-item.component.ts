import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input() contact: Contact;
  @Output() contactSelected = new EventEmitter<void>();

  onSelected() {
    this.contactSelected.emit();
  }
}