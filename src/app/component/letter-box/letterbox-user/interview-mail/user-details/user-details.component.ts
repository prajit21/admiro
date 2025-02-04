import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-user-details',
    imports: [CommonModule, NgxEditorModule, FormsModule, ReactiveFormsModule, FeathericonComponent],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  public isOpen: boolean = false;
  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
