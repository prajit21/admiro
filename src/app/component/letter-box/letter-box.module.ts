import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetterBoxRoutingModule } from './letter-box-routing.module';

import { LetterBoxComponent } from './letter-box.component';
import { AddLabelComponent } from './letter-modal/add-label/add-label.component';
import { ComposeEmailComponent } from './letter-modal/compose-email/compose-email.component';
import { LetterTopSectionComponent } from './letter-top-section/letter-top-section.component';
import { LetterboxSidebarComponent } from './letterbox-sidebar/letterbox-sidebar.component';
import { LetterboxUserComponent } from './letterbox-user/letterbox-user.component';
import { InterviewMailComponent } from './letterbox-user/interview-mail/interview-mail.component';
import { UserDetailsComponent } from './letterbox-user/interview-mail/user-details/user-details.component';


@NgModule({
  declarations: [
    LetterBoxComponent,
    AddLabelComponent,
    ComposeEmailComponent,
    LetterTopSectionComponent,
    LetterboxSidebarComponent,
    LetterboxUserComponent,
    InterviewMailComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    LetterBoxRoutingModule,
    SharedModule,
    AngularEditorModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LetterBoxModule { }
