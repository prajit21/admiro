import { Component, Input } from '@angular/core';
import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
  selector: 'app-address-contact',
  templateUrl: './address-contact.component.html',
  styleUrl: './address-contact.component.scss'
})
export class AddressContactComponent {

  public editContact: boolean = true;
  
  @Input() lastData: data.lastDataList;

}
