
import { Component, SimpleChanges, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import * as data from '../../../shared/data/contacts/all-contact';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { ContactDetails } from '../contact-details/contact-details';
import { AddCategory } from '../contact-modal/add-category/add-category';
import { NewContact } from '../contact-modal/new-contact/new-contact';

@Component({
  selector: 'app-contact-sidebar',
  imports: [ClickOutsideDirective, Feathericon, ContactDetails],
  templateUrl: './contact-sidebar.html',
  styleUrl: './contact-sidebar.scss',
})
export class ContactSidebar {
  public selectedId: number;
  public statusData: boolean;
  public titleData: string;

  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open: boolean = false;

  private modalService = inject(NgbModal);

  ngOnInit(_changes: SimpleChanges) {
    let getStatusdata = this.Personal.filter(data => {
      return data.status == true;
    });
    this.statusData = getStatusdata[0]?.status;
  }

  openMenu() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }

  openContact(id: number, _title: string) {
    const getpersonalID = this.Personal.filter(data => data.title_id == id);
    this.selectedId = getpersonalID[0].title_id;
    const gettitle = this.Personal.filter(item => (item.title_id = id));
    this.titleData = gettitle[0].title;
  }

  openContact1(id: number, _title: string) {
    const getorganizationID = this.organization.filter(data => data.title_id == id);
    this.selectedId = getorganizationID[0].title_id;
    const gettitle1 = this.organization.filter(item => (item.title_id = id));
    this.titleData = gettitle1[0].title;
  }

  newContacts() {
    this.modalService.open(NewContact, { size: 'lg' });
  }

  addCategory() {
    this.modalService.open(AddCategory, { size: 'SM' });
  }
}
