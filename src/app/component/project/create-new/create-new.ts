import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProjectCreateForm } from './project-create-form/project-create-form';
import { UploadFile } from './upload-file/upload-file';

@Component({
  selector: 'app-create-new',
  imports: [CommonModule, UploadFile, ProjectCreateForm],
  templateUrl: './create-new.html',
  styleUrl: './create-new.scss',
})
export class CreateNew {}
