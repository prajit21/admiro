import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Editor, NgxEditorModule } from 'ngx-editor';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-user-details',
  imports: [NgxEditorModule, FormsModule, ReactiveFormsModule, Feathericon],
  templateUrl: './user-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-details.scss',
})
export class UserDetails {
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

  clickOutside(): void {
    this.isOpen = false;
  }
}
