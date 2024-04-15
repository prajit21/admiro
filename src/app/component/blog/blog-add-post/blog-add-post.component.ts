import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrl: './blog-add-post.component.scss'
})
export class BlogAddPostComponent {

  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public htmlContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    autoProcessQueue: false,
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(args: DropzoneConfigInterface): void {
   
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {
   
  }


}
