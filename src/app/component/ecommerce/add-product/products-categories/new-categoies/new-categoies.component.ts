import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-categoies',
  standalone: true,
  imports: [CommonModule,AngularEditorModule, FormsModule],
  templateUrl: './new-categoies.component.html',
  styleUrl: './new-categoies.component.scss'
})
export class NewCategoiesComponent {

  public htmlContent = '';
  
  constructor(public activeModal: NgbActiveModal) { }

}
