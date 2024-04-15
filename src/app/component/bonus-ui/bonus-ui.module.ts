import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";
import { SharedModule } from '../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from 'ngx-slider-v2';
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { ImageCropperModule } from 'ngx-image-cropper';
import { BonusUiRoutingModule } from './bonus-ui-routing.module';

import { ToastsComponent } from './toasts/toasts.component';
import { RatingComponent } from './rating/rating.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { DefaultBreadcrumbComponent } from './breadcrumb/default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './breadcrumb/divider-breadcrumb/divider-breadcrumb.component';
import { IconsBreadcrumbComponent } from './breadcrumb/icons-breadcrumb/icons-breadcrumb.component';
import { ColoredBreadcrumbComponent } from './breadcrumb/colored-breadcrumb/colored-breadcrumb.component';
import { DefaultPaginationComponent } from './pagination/default-pagination/default-pagination.component';
import { ActiveDisabledPaginationComponent } from './pagination/active-disabled-pagination/active-disabled-pagination.component';
import { IconsPaginationComponent } from './pagination/icons-pagination/icons-pagination.component';
import { RoundedPaginationComponent } from './pagination/rounded-pagination/rounded-pagination.component';
import { AlignmentPaginationComponent } from './pagination/alignment-pagination/alignment-pagination.component';
import { SizingPaginationComponent } from './pagination/sizing-pagination/sizing-pagination.component';
import { VariationsLeftRibbonsComponent } from './ribbons/variations-left-ribbons/variations-left-ribbons.component';
import { VariationsRightRibbonsComponent } from './ribbons/variations-right-ribbons/variations-right-ribbons.component';
import { LiveToastComponent } from './toasts/live-toast/live-toast.component';
import { StackingToastComponent } from './toasts/stacking-toast/stacking-toast.component';
import { TranslucentToastComponent } from './toasts/translucent-toast/translucent-toast.component';
import { DefaultToastComponent } from './toasts/default-toast/default-toast.component';
import { UniqueToastComponent } from './toasts/unique-toast/unique-toast.component';
import { ColorSchemesComponent } from './toasts/color-schemes/color-schemes.component';
import { CurrentRatingbarComponent } from './rating/current-ratingbar/current-ratingbar.component';
import { HorizontalRatingbarComponent } from './rating/horizontal-ratingbar/horizontal-ratingbar.component';
import { MovieRatingbarComponent } from './rating/movie-ratingbar/movie-ratingbar.component';
import { OneToTenRatingbarComponent } from './rating/one-to-ten-ratingbar/one-to-ten-ratingbar.component';
import { SquareRatingbarComponent } from './rating/square-ratingbar/square-ratingbar.component';
import { StarRatingbarComponent } from './rating/star-ratingbar/star-ratingbar.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { DefaultFileUploadComponent } from './dropzone/default-file-upload/default-file-upload.component';
import { ImagePerviewComponent } from './dropzone/image-perview/image-perview.component';
import { MultiFileUploadComponent } from './dropzone/multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './dropzone/single-file-upload/single-file-upload.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { BasicSweetalertComponent } from './sweetalert2/basic-sweetalert/basic-sweetalert.component';
import { AdvanceSweetalertComponent } from './sweetalert2/advance-sweetalert/advance-sweetalert.component';
import { UniqueSweetalertComponent } from './sweetalert2/unique-sweetalert/unique-sweetalert.component';
import { DirectionSweetalertComponent } from './sweetalert2/direction-sweetalert/direction-sweetalert.component';
import { InputSweetalertComponent } from './sweetalert2/input-sweetalert/input-sweetalert.component';
import { GithubAvatarComponent } from './sweetalert2/github-avatar/github-avatar.component';
import { RtlSupportComponent } from './sweetalert2/rtl-support/rtl-support.component';
import { MessageTimerComponent } from './sweetalert2/message-timer/message-timer.component';
import { ModalWithImageComponent } from './sweetalert2/modal-with-image/modal-with-image.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { SlidesOnlyComponent } from './owl-carousel/slides-only/slides-only.component';
import { AutoHeightExampleComponent } from './owl-carousel/auto-height-example/auto-height-example.component';
import { AutoPlayComponent } from './owl-carousel/auto-play/auto-play.component';
import { CrossFadeComponent } from './owl-carousel/cross-fade/cross-fade.component';
import { CenterExampleComponent } from './owl-carousel/center-example/center-example.component';
import { LazyLoadExampleComponent } from './owl-carousel/lazy-load-example/lazy-load-example.component';
import { RightLeftExampleComponent } from './owl-carousel/right-left-example/right-left-example.component';
import { AutoWidhtExampleComponent } from './owl-carousel/auto-widht-example/auto-widht-example.component';
import { ResponsiveExampleComponent } from './owl-carousel/responsive-example/responsive-example.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CreativeCardComponent } from './creative-card/creative-card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DefaultRangeSliderComponent } from './range-slider/default-range-slider/default-range-slider.component';
import { MinMaxSliderComponent } from './range-slider/min-max-slider/min-max-slider.component';
import { CustomValuesComponent } from './range-slider/custom-values/custom-values.component';
import { PrettifyNumberComponent } from './range-slider/prettify-number/prettify-number.component';
import { DisabledComponent } from './range-slider/disabled/disabled.component';
import { TopCommonCardComponent } from './basic-card/top-common-card/top-common-card.component';
import { DarkColorCardComponent } from './basic-card/dark-color-card/dark-color-card.component';
import { CommonBorderCardComponent } from './creative-card/common-border-card/common-border-card.component';
import { BorderPrimaryStateComponent } from './creative-card/border-primary-state/border-primary-state.component';
import { BorderWarningStateComponent } from './creative-card/border-warning-state/border-warning-state.component';
import { CommonBottomCardComponent } from './creative-card/common-bottom-card/common-bottom-card.component';
import { BasicTimelineComponent } from './timeline/basic-timeline/basic-timeline.component';
import { HoveringTimelineComponent } from './timeline/hovering-timeline/hovering-timeline.component';
import { VariationTimelineComponent } from './timeline/variation-timeline/variation-timeline.component';
import { HorizontalTimelineComponent } from './timeline/horizontal-timeline/horizontal-timeline.component';
import { TimelineChartComponent } from './timeline/timeline-chart/timeline-chart.component';
import { WithOutlineComponent } from './pagination/with-outline/with-outline.component';
import { WithDisabledComponent } from './pagination/with-disabled/with-disabled.component';
import { SimpleBreadcrumbComponent } from './breadcrumb/simple-breadcrumb/simple-breadcrumb.component';
import { AlignmentBreadcrumbComponent } from './breadcrumb/alignment-breadcrumb/alignment-breadcrumb.component';
import { CommonInfoCardComponent } from './basic-card/common-info-card/common-info-card.component';
import { BorderSecondaryStateComponent } from './creative-card/border-secondary-state/border-secondary-state.component';

@NgModule({
  declarations: [
    ToastsComponent,
    RatingComponent,
    BreadcrumbComponent,
    PaginationComponent,
    RibbonsComponent,
    DefaultBreadcrumbComponent,
    DividerBreadcrumbComponent,
    IconsBreadcrumbComponent,
    ColoredBreadcrumbComponent,
    DefaultPaginationComponent,
    ActiveDisabledPaginationComponent,
    IconsPaginationComponent,
    RoundedPaginationComponent,
    AlignmentPaginationComponent,
    SizingPaginationComponent,
    VariationsLeftRibbonsComponent,
    VariationsRightRibbonsComponent,
    LiveToastComponent,
    StackingToastComponent,
    TranslucentToastComponent,
    DefaultToastComponent,
    UniqueToastComponent,
    ColorSchemesComponent,
    CurrentRatingbarComponent,
    HorizontalRatingbarComponent,
    MovieRatingbarComponent,
    OneToTenRatingbarComponent,
    SquareRatingbarComponent,
    StarRatingbarComponent,
    DropzoneComponent,
    DefaultFileUploadComponent,
    ImagePerviewComponent,
    MultiFileUploadComponent,
    SingleFileUploadComponent,
    Sweetalert2Component,
    BasicSweetalertComponent,
    AdvanceSweetalertComponent,
    UniqueSweetalertComponent,
    DirectionSweetalertComponent,
    InputSweetalertComponent,
    GithubAvatarComponent,
    RtlSupportComponent,
    MessageTimerComponent,
    ModalWithImageComponent,
    OwlCarouselComponent,
    SlidesOnlyComponent,
    AutoHeightExampleComponent,
    AutoPlayComponent,
    CrossFadeComponent,
    CenterExampleComponent,
    LazyLoadExampleComponent,
    RightLeftExampleComponent,
    AutoWidhtExampleComponent,
    ResponsiveExampleComponent,
    RangeSliderComponent,
    ImageCropperComponent,
    BasicCardComponent,
    CreativeCardComponent,
    TimelineComponent,
    DefaultRangeSliderComponent,
    MinMaxSliderComponent,
    CustomValuesComponent,
    PrettifyNumberComponent,
    DisabledComponent,
    TopCommonCardComponent,
    DarkColorCardComponent,
    CommonBorderCardComponent,
    BorderPrimaryStateComponent,
    BorderWarningStateComponent,
    CommonBottomCardComponent,
    BasicTimelineComponent,
    HoveringTimelineComponent,
    VariationTimelineComponent,
    HorizontalTimelineComponent,
    TimelineChartComponent,
    WithOutlineComponent,
    WithDisabledComponent,
    SimpleBreadcrumbComponent,
    AlignmentBreadcrumbComponent,
    CommonInfoCardComponent,
    BorderSecondaryStateComponent
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    SharedModule,
    BarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CarouselModule,
    NgxSliderModule,
    ImageCropperModule,
    DropzoneModule
  ]
})
export class BonusUiModule { }
