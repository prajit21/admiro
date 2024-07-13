import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import * as data from '../../../shared/data/contacts/all-contact';
import { AddCategoryComponent } from '../contact-modal/add-category/add-category.component';
import { NewContactComponent } from '../contact-modal/new-contact/new-contact.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-contact-sidebar',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, FeathericonComponent, ContactDetailsComponent],
  templateUrl: './contact-sidebar.component.html',
  styleUrl: './contact-sidebar.component.scss'
})

export class ContactSidebarComponent {

  public selectedId: number;
  public statusData: boolean;
  public titleData: string;

  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open:boolean = false;

  constructor(private modalService: NgbModal) { }

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
    const model = this.modalService.open(NewContactComponent, { size: 'lg' });
  }

  addCategory() {
    const model = this.modalService.open(AddCategoryComponent, { size: 'SM' });
  }


}
