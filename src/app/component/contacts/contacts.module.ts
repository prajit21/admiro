import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactsComponent } from './contacts.component';
import { ContactSidebarComponent } from './contact-sidebar/contact-sidebar.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ProfileDataComponent } from './contact-details/profile-data/profile-data.component';
import { AddressContactComponent } from './contact-details/profile-data/edit-profile/address-contact/address-contact.component';
import { GeneralComponent } from './contact-details/profile-data/edit-profile/general/general.component';
import { PersonalContactComponent } from './contact-details/profile-data/edit-profile/personal-contact/personal-contact.component';
import { AddCategoryComponent } from './contact-modal/add-category/add-category.component';
import { NewContactComponent } from './contact-modal/new-contact/new-contact.component';
import { PrintComponent } from './contact-modal/print/print.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactSidebarComponent,
    ContactDetailsComponent,
    ProfileDataComponent,
    AddressContactComponent,
    GeneralComponent,
    PersonalContactComponent,
    AddCategoryComponent,
    NewContactComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    NgxPrintModule,
    ReactiveFormsModule,
  ],
  providers: [
    NgbActiveModal,
  ]

})
export class ContactsModule { }
