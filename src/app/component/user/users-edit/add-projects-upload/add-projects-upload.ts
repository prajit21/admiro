import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { projectData } from '../../../../shared/data/user/users-edit';

@Component({
  selector: 'app-add-projects-upload',
  imports: [CommonModule],
  templateUrl: './add-projects-upload.html',
  styleUrl: './add-projects-upload.scss',
})
export class AddProjectsUpload {
  public projectitem = projectData;
}
