import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { knowledgebaseData } from '../../../shared/data/knowledgebase/knowledgebase';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { TopCommonFaq } from '../../faq/top-common-faq/top-common-faq';

@Component({
    selector: 'app-knowledgebase-top-data',
    imports: [CommonModule, Feathericon, TopCommonFaq],
    templateUrl: './knowledgebase-top-data.html',
    styleUrl: './knowledgebase-top-data.scss'
})
export class KnowledgebaseTopData {

  public knowledgebaseData = knowledgebaseData;

}
