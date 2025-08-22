import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalDetails } from './personal-details/personal-details';
import { UploadFiles } from './upload-files/upload-files';
import { YourExprience } from './your-exprience/your-exprience';
import { YourEduction } from './your-eduction/your-eduction';

@Component({
    selector: 'app-apply-form',
    imports: [CommonModule, PersonalDetails, UploadFiles, YourExprience, YourEduction],
    templateUrl: './apply-form.html',
    styleUrl: './apply-form.scss'
})
export class ApplyForm {

}
