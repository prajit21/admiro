import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager.component';

const routes: Routes = [
  {
    path: '',
    component: FileManagerComponent,  
    data: {
      title: "File manager",
      breadcrumb: "File manager",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
