import { Component } from '@angular/core';
import *as data from '../../shared/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrl: './knowledgebase.component.scss'
})
export class KnowledgebaseComponent {

  public featuredTutorialData = data.featuredTutorialData;

}
