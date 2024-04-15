import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FaqModule } from '../faq/faq.module';
import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';

import { KnowledgebaseComponent } from './knowledgebase.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { BrowseArticalCategoriesComponent } from './browse-artical-categories/browse-artical-categories.component';

@NgModule({
  declarations: [
    KnowledgebaseComponent, 
    KnowledgebaseFooterDataComponent,
    KnowledgebaseTopDataComponent,
    BrowseArticalCategoriesComponent
  ],
  imports: [
    CommonModule,
    KnowledgebaseRoutingModule,
    SharedModule,
    FaqModule,
  ]
})
export class KnowledgebaseModule { }
