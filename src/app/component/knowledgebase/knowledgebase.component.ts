import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import *as data from '../../shared/data/knowledgebase/knowledgebase';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';
import { BrowseArticalCategoriesComponent } from './browse-artical-categories/browse-artical-categories.component';
import { FeaturedTutorialsComponent } from '../faq/featured-tutorials/featured-tutorials.component';

@Component({
    selector: 'app-knowledgebase',
    imports: [CommonModule, KnowledgebaseTopDataComponent, KnowledgebaseFooterDataComponent,
        BrowseArticalCategoriesComponent, FeaturedTutorialsComponent],
    templateUrl: './knowledgebase.component.html',
    styleUrl: './knowledgebase.component.scss'
})
export class KnowledgebaseComponent {

  public featuredTutorialData = data.featuredTutorialData;

}
