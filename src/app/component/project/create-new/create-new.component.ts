import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ProjectCreateFormComponent } from './project-create-form/project-create-form.component';

@Component({
    selector: 'app-create-new',
    imports: [CommonModule, UploadFileComponent, ProjectCreateFormComponent],
    templateUrl: './create-new.component.html',
    styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {

}
