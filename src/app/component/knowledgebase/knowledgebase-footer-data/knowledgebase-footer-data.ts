import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import *as data from '../../../shared/data/knowledgebase/knowledgebase';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-knowledgebase-footer-data',
    imports: [CommonModule, Feathericon],
    templateUrl: './knowledgebase-footer-data.html',
    styleUrl: './knowledgebase-footer-data.scss'
})
export class KnowledgebaseFooterData {

  public Articalvidoes = data.articlesAndVideosData;

}
