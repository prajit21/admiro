import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
    selector: 'app-personal-contact',
    imports: [CommonModule],
    templateUrl: './personal-contact.component.html',
    styleUrl: './personal-contact.component.scss'
})
export class PersonalContactComponent {

  @Input() lastData: data.lastDataList;

  public days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",]
  public months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

}
