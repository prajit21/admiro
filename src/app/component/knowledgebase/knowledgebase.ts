import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import *as data from '../../shared/data/knowledgebase/knowledgebase';
import { KnowledgebaseTopData } from './knowledgebase-top-data/knowledgebase-top-data';
import { KnowledgebaseFooterData } from './knowledgebase-footer-data/knowledgebase-footer-data';
import { BrowseArticalCategories } from './browse-artical-categories/browse-artical-categories';
import { FeaturedTutorials } from '../faq/featured-tutorials/featured-tutorials';

@Component({
    selector: 'app-knowledgebase',
    imports: [CommonModule, KnowledgebaseTopData, KnowledgebaseFooterData,
        BrowseArticalCategories, FeaturedTutorials],
    templateUrl: './knowledgebase.html',
    styleUrl: './knowledgebase.scss'
})
export class Knowledgebase {

  public featuredTutorialData = data.featuredTutorialData;

}
