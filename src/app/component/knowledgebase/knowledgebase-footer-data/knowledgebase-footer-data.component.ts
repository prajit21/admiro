import { Component } from '@angular/core';
import *as data from '../../../shared/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-knowledgebase-footer-data',
  templateUrl: './knowledgebase-footer-data.component.html',
  styleUrl: './knowledgebase-footer-data.component.scss'
})
export class KnowledgebaseFooterDataComponent {

  public Articalvidoes = data.articlesAndVideosData;

}
