import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { YourExprienceComponent } from './your-exprience/your-exprience.component';
import { YourEductionComponent } from './your-eduction/your-eduction.component';

@Component({
    selector: 'app-apply-form',
    imports: [CommonModule, PersonalDetailsComponent, UploadFilesComponent, YourExprienceComponent, YourEductionComponent],
    templateUrl: './apply-form.component.html',
    styleUrl: './apply-form.component.scss'
})
export class ApplyFormComponent {

}
