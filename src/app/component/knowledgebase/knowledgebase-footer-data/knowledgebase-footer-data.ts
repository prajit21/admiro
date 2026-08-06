import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import * as data from '../../../shared/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-knowledgebase-footer-data',
  imports: [Feathericon],
  templateUrl: './knowledgebase-footer-data.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './knowledgebase-footer-data.scss',
})
export class KnowledgebaseFooterData {
  public Articalvidoes = data.articlesAndVideosData;
}
