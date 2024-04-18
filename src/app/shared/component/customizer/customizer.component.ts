import { Component, TemplateRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})
export class CustomizerComponent {

 
  constructor( private modalService: NgbModal,public layoutService: LayoutService) { }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }


  copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox)
  }

}
