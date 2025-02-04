import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { browseArticlesData } from '../../../shared/data/knowledgebase/knowledgebase';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-browse-artical-categories',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './browse-artical-categories.component.html',
    styleUrl: './browse-artical-categories.component.scss'
})
export class BrowseArticalCategoriesComponent {

  public browseArticlesData = browseArticlesData;

}
