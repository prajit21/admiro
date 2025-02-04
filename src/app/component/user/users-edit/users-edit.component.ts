import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { AddProjectsUploadComponent } from './add-projects-upload/add-projects-upload.component';

@Component({
    selector: 'app-users-edit',
    imports: [CommonModule, MyProfileComponent, EditProfileFormComponent, AddProjectsUploadComponent],
    templateUrl: './users-edit.component.html',
    styleUrl: './users-edit.component.scss'
})
export class UsersEditComponent {

}
