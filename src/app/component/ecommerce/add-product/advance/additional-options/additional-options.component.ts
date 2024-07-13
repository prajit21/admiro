import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-additional-options',
  standalone: true,
  imports: [CommonModule,AngularEditorModule],
  templateUrl: './additional-options.component.html',
  styleUrl: './additional-options.component.scss'
})
export class AdditionalOptionsComponent {

  public htmlContent = '';

}
