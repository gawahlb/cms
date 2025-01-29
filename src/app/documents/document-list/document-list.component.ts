import { Component } from '@angular/core';
import { ContactItemComponent } from "../../contacts/contact-item/contact-item.component";

@Component({
  selector: 'app-document-list',
  imports: [ContactItemComponent],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {

}
