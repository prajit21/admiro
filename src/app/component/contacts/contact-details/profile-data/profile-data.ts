import {
  Component,
  Input,
  SimpleChanges,
  input,
  viewChild,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { AddressContact } from './edit-profile/address-contact/address-contact';
import { General } from './edit-profile/general/general';
import { PersonalContact } from './edit-profile/personal-contact/personal-contact';
import { contactData, lastDataList } from '../../../../shared/data/contacts/all-contact';
import * as data from '../../../../shared/data/contacts/all-contact';
import { Print } from '../../contact-modal/print/print';

@Component({
  selector: 'app-profile-data',
  imports: [AddressContact, General, PersonalContact, Print],
  templateUrl: './profile-data.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './profile-data.scss',
})
export class ProfileData {
  readonly selectedSubId = input<number>();
  readonly status = input<boolean>();
  @Input() lastData: lastDataList;
  readonly TaskData = input<contactData>();

  public editContact: boolean = false;
  public open: boolean = false;
  public Personal = data.Personal;
  public Organization = data.Organization;
  public statusData: contactData;

  readonly PrintModal = viewChild<Print>('printModal');

  private modalService = inject(NgbModal);

  ngOnInit() {
    this.Personal.map(data => {
      if (data.status) {
        this.statusData = data;
      }
      const listnewData = this.statusData.data;
      const currentData = listnewData.filter((data: { status: boolean }) => {
        return data.status === true;
      });
      this.lastData = currentData[0];
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedSubId']?.currentValue;
    this.Personal.map(data => {
      if (data.title_id === id) {
        this.statusData = data;
      }
    });
  }

  openHistory() {
    this.open = !this.open;
  }

  printContact(_id: number) {
    this.modalService.open(Print);
  }

  deleteContact() {
    Swal.fire({
      text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#EFEFEE !important',
      confirmButtonColor: 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
      } else {
        Swal.fire('', 'Your contact is safe!');
      }
    });
  }
}
