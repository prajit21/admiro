import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobSearchRoutingModule } from './job-search-routing.module';

import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { ApplyComponent } from './apply/apply.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SimilarJobsComponent } from './job-details/similar-jobs/similar-jobs.component';
import { ApplyFormComponent } from './apply/apply-form/apply-form.component';
import { PersonalDetailsComponent } from './apply/apply-form/personal-details/personal-details.component';
import { UploadFilesComponent } from './apply/apply-form/upload-files/upload-files.component';
import { YourEductionComponent } from './apply/apply-form/your-eduction/your-eduction.component';
import { YourExprienceComponent } from './apply/apply-form/your-exprience/your-exprience.component';

@NgModule({
  declarations: [
    CardsViewComponent,
    JobFilterComponent,
    ApplyComponent,
    JobDetailsComponent,
    ListViewComponent,
    SimilarJobsComponent,
    ApplyFormComponent,
    PersonalDetailsComponent,
    UploadFilesComponent,
    YourEductionComponent,
    YourExprienceComponent
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule,
    NgbModule 
  ]
})
export class JobSearchModule { }
