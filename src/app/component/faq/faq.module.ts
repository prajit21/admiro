import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';

import { FaqComponent } from './faq.component';
import { TopCommonFaqComponent } from './top-common-faq/top-common-faq.component';
import { QuestionsComponent } from './questions/questions.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticalVideosComponent } from './latest-artical-videos/latest-artical-videos.component';
import { LatestUpdateComponent } from './latest-update/latest-update.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SerachArticalComponent } from './serach-artical/serach-artical.component';

@NgModule({
  declarations: [
    FaqComponent,
    TopCommonFaqComponent,
    QuestionsComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent,
    LatestUpdateComponent,
    NavigationComponent,
    SerachArticalComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule
  ],
  exports : [
    TopCommonFaqComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent
  ]
})
export class FaqModule { }
