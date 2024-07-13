import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import *as data from '../../../shared/data/knowledgebase/knowledgebase';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-knowledgebase-footer-data',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './knowledgebase-footer-data.component.html',
  styleUrl: './knowledgebase-footer-data.component.scss'
})
export class KnowledgebaseFooterDataComponent {

  public Articalvidoes = data.articlesAndVideosData;

}
