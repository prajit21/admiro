import { Component, SimpleChanges } from '@angular/core';
import *as data from '../../../shared/data/letter-box/letter-box';
import { ComposeEmailComponent } from '../letter-modal/compose-email/compose-email.component';
import { AddLabelComponent } from '../letter-modal/add-label/add-label.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { LetterboxUserComponent } from '../letterbox-user/letterbox-user.component';

@Component({
    selector: 'app-letterbox-sidebar',
    imports: [CommonModule, ClickOutsideDirective, LetterboxUserComponent],
    templateUrl: './letterbox-sidebar.component.html',
    styleUrl: './letterbox-sidebar.component.scss'
})
export class LetterboxSidebarComponent {

  public email = data.emailFilter;
  public emailData: data.email;
  public selectedId: number;
  public statusData: boolean;
  public open: boolean = false;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(changes: SimpleChanges) {
    let getStatusdata = this.email.filter((data) => {
      return data.status == true;
    })
    this.statusData = getStatusdata[0]?.status;
  }

  letterbox(item: data.email) {
    const getdata = this.email.filter(data => data.id == item.id);
    this.selectedId = getdata[0].id;
    this.email.filter(data => {
      if (item.id == data.id) {
        data.status = true;
      } else {
        data.status = false;
      }
    })
  }

  composeEmail() {
    const model = this.modalService.open(ComposeEmailComponent , { size: 'lg' });
  }

  addlable(){
    const model = this.modalService.open( AddLabelComponent, { size: 'lg' });
  }
  
  openMenu() {
    this.open = !this.open
  }
   
  clickOutside():void { 
    this.open = false;
  }


}
