import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { FormsModule } from '@angular/forms';
import { DocumentsComponent } from "./documents/documents.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ContactsComponent,
    FormsModule,
    DocumentsComponent,
    MessageListComponent,
    NgIf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';

 selectedFeature = 'documents';
 switchView(selectedFeature: string) {
  this.selectedFeature = selectedFeature;
 } 
}
