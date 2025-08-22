import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { inject } from '@angular/core';
import * as data from '../../../shared/data/contacts/all-contact';
import { AddCategory } from '../contact-modal/add-category/add-category';
import { NewContact } from '../contact-modal/new-contact/new-contact';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { ContactDetails } from '../contact-details/contact-details';

@Component({
    selector: 'app-contact-sidebar',
    imports: [CommonModule, ClickOutsideDirective, Feathericon, ContactDetails],
    templateUrl: './contact-sidebar.html',
    styleUrl: './contact-sidebar.scss'
})

export class ContactSidebar {

  public selectedId: number;
  public statusData: boolean;
  public titleData: string;

  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open:boolean = false;

  private modalService = inject(NgbModal);

  ngOnInit(changes: SimpleChanges) {
    let getStatusdata = this.Personal.filter((data) => {
      return data.status == true;
    })
    this.statusData = getStatusdata[0]?.status;
  }


  openMenu() {
    this.open = !this.open
  }
  
  clickOutside():void { 
    this.open = false;
  }

  openContact(id: number, title: string) {
    const getpersonalID = this.Personal.filter(data => data.title_id == id);
    this.selectedId = getpersonalID[0].title_id;
    const gettitle = this.Personal.filter(item => item.title_id = id);
    this.titleData = gettitle[0].title;
  }

  openContact1(id: number, title: string) {
    const getorganizationID = this.organization.filter(data => data.title_id == id);
    this.selectedId = getorganizationID[0].title_id;
    const gettitle1 = this.organization.filter(item => item.title_id = id);
    this.titleData = gettitle1[0].title;
  }



  newContacts() {
    const model = this.modalService.open(NewContact, { size: 'lg' });
  }

  addCategory() {
    const model = this.modalService.open(AddCategory, { size: 'SM' });
  }


}
