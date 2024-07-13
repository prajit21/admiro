import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projectData } from '../../../../shared/data/user/users-edit';

@Component({
  selector: 'app-add-projects-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-projects-upload.component.html',
  styleUrl: './add-projects-upload.component.scss'
})
export class AddProjectsUploadComponent {

  public projectitem = projectData;

}
