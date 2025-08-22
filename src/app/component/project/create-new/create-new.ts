import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadFile } from './upload-file/upload-file';
import { ProjectCreateForm } from './project-create-form/project-create-form';

@Component({
    selector: 'app-create-new',
    imports: [CommonModule, UploadFile, ProjectCreateForm],
    templateUrl: './create-new.html',
    styleUrl: './create-new.scss'
})
export class CreateNew {

}
