import { Component } from '@angular/core';

@Component({
  selector: 'app-mde-editor',
  templateUrl: './mde-editor.component.html',
  styleUrl: './mde-editor.component.scss'
})
export class MdeEditorComponent {

  public htmlContent = '';

  constructor() { }
    ngOnInit(): void {
 }

}
