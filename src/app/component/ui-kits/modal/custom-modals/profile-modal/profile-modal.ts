import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-profile-modal',
    imports: [CommonModule],
    templateUrl: './profile-modal.html',
    styleUrl: './profile-modal.scss'
})
export class ProfileModal {

  private modalService = inject(NgbModal);

  profilemodal(profilecontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(profilecontant, { centered: true });
  }


}
