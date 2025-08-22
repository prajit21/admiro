import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyProfile } from './my-profile/my-profile';
import { EditProfileForm } from './edit-profile-form/edit-profile-form';
import { AddProjectsUpload } from './add-projects-upload/add-projects-upload';

@Component({
    selector: 'app-users-edit',
    imports: [CommonModule, MyProfile, EditProfileForm, AddProjectsUpload],
    templateUrl: './users-edit.html',
    styleUrl: './users-edit.scss'
})
export class UsersEdit {

}
