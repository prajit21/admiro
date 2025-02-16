import { Component, Input, SimpleChanges } from '@angular/core';
import * as data from '../../../shared/data/letter-box/letter-box';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterviewMailComponent } from './interview-mail/interview-mail.component';
import { LetterTopSectionComponent } from '../letter-top-section/letter-top-section.component';

@Component({
    selector: 'app-letterbox-user',
    imports: [CommonModule, NgbModule, InterviewMailComponent, LetterTopSectionComponent],
    templateUrl: './letterbox-user.component.html',
    styleUrl: './letterbox-user.component.scss'
})
export class LetterboxUserComponent {

  @Input() selectedId: number;
  @Input() statusData: boolean;
  @Input() open: boolean;

  public emailitem = data.emailFilter;
  public emailDatas: data.email;
  public Data: data.DataInterface[];
  public isShow: boolean = false;
  public isStar: boolean = false;
  public filterValue: boolean;
  public collectionSize = 9;
  public active = false;
  public page = 1;
  public pageSize = 8;


  ngOnInit() {
    this.emailitem.map((data) => {
      if (data.status) {
        this.emailDatas = data;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let emailid = changes['selectedId']?.currentValue;
    this.emailitem.map((data) => {
      if (data.id == emailid) {
        this.emailDatas = data;
      }
    })
  }


  openMenu(value: string, id: number) {
    if (value == 'star') {
      this.isStar = true;
      this.Data = this.emailitem[0].data.filter((data) => {
        return data.id === id;
      })
      this.Data[0].isStar = !this.Data[0].isStar;
    }
  }

  toggle() {
    this.active = !this.active
  }

receiverFilterValue(value: boolean) {
  this.isShow = false;
  this.filterValue = value;
}

deleteEmail(index: number, name: string) {
  this.emailitem.forEach((data) => {
    if (data.id == this.emailDatas.id) {
      data.data.forEach((element) => {
        if (this.emailitem)
          if (element.name == name) {
            data.data.splice(index, 1);
          }
      });
    }
  });
}

getPaginationData() {
  this.Data = this.Data?.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
}
