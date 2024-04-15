import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditorsRoutingModule } from './editors-routing.module';

import { MdeEditorComponent } from './mde-editor/mde-editor.component';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';

@NgModule({
  declarations: [
    MdeEditorComponent,
    NgxEditorComponent
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule,
    NgxEditorModule,
    SharedModule,
    AngularEditorModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditorsModule { }
