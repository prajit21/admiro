import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import * as data from '../../../shared/data/contacts/all-contact';
import { ProfileDataComponent } from './profile-data/profile-data.component';

@Component({
    selector: 'app-contact-details',
    imports: [CommonModule, ProfileDataComponent],
    templateUrl: './contact-details.component.html',
    styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {

  @Input() selectedId: number;
  @Input() statusData: boolean;

  public Personal = data.Personal;
  public Organization = data.Organization;
  public getTaskData: data.contactData;
  public lastData: data.lastDataList;
  public editContact: boolean = false;
  public open: boolean = false;

  ngOnInit() {
    this.Personal.map((data) => {
      if (data.status) {
        this.getTaskData = data;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let oragnization_Id = changes['selectedId']?.currentValue;
    this.Organization.map((data) => {
      if (data.title_id === oragnization_Id) {
        this.getTaskData = data;
      }
    })
    
    let persnol_Id = changes['selectedId']?.currentValue;
    this.Personal.map((data) => {
      if (data.title_id === persnol_Id) {
        this.getTaskData = data;
      }
    })
  }

  changeData(list: data.lastDataList) {
    this.lastData = list;
    if (!list.status) {
      this.getTaskData.data.forEach((a: data.lastDataList) => {
        a.status = false;
      })
    }
    list.status = !list.status;
  }

  openHistory() {
    this.open = !this.open;
  }

}
