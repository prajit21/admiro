import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitsRoutingModule } from './ui-kits-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TypographyComponent } from './typography/typography.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { ColoredHeadingsComponent } from './typography/colored-headings/colored-headings.component';
import { FontWeightComponent } from './typography/font-weight/font-weight.component';
import { ListingTypographyComponent } from './typography/listing-typography/listing-typography.component';
import { DisplayHeadingComponent } from './typography/display-heading/display-heading.component';
import { InlineTextElementsComponent } from './typography/inline-text-elements/inline-text-elements.component';
import { TextColorComponent } from './typography/text-color/text-color.component';
import { BlockquotesComponent } from './typography/blockquotes/blockquotes.component';
import { SizesComponent } from './avatars/sizes/sizes.component';
import { StatusIndicatorComponent } from './avatars/status-indicator/status-indicator.component';
import { ShapesComponent } from './avatars/shapes/shapes.component';
import { GroupingComponent } from './avatars/grouping/grouping.component';
import { RatioComponent } from './avatars/ratio/ratio.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { GridOptionComponent } from './grid/grid-option/grid-option.component';
import { GridColumnComponent } from './grid/grid-column/grid-column.component';
import { VerticalAlignmentComponent } from './grid/vertical-alignment/vertical-alignment.component';
import { HorizontalAlignmentComponent } from './grid/horizontal-alignment/horizontal-alignment.component';
import { NestingComponent } from './grid/nesting/nesting.component';
import { OrderComponent } from './grid/order/order.component';
import { OffsetComponent } from './grid/offset/offset.component';
import { StylesBordersComponent } from './helper-classes/styles-borders/styles-borders.component';
import { BorderDisplaysComponent } from './helper-classes/border-displays/border-displays.component';
import { StylesBackgroudComponent } from './helper-classes/styles-backgroud/styles-backgroud.component';
import { BorderColorComponent } from './helper-classes/border-color/border-color.component';
import { ImagesSizesComponent } from './helper-classes/images-sizes/images-sizes.component';
import { FontStyleComponent } from './helper-classes/font-style/font-style.component';
import { FontSizeComponent } from './helper-classes/font-size/font-size.component';
import { CommonBorderstyleComponent } from './helper-classes/styles-borders/common-borderstyle/common-borderstyle.component';
import { CommonBorderDisplayComponent } from './helper-classes/border-displays/common-border-display/common-border-display.component';
import { CommonStylesBackgroundComponent } from './helper-classes/styles-backgroud/common-styles-background/common-styles-background.component';
import { TagPillsComponent } from './tag-pills/tag-pills.component';
import { ProgressComponent } from './progress/progress.component';
import { CommonBadgePillsComponent } from './tag-pills/common-badge-pills/common-badge-pills.component';
import { BadgeHeadingsComponent } from './tag-pills/badge-headings/badge-headings.component';
import { BadgesButtonsComponent } from './tag-pills/badges-buttons/badges-buttons.component';
import { CommonProgressBarComponent } from './progress/common-progress-bar/common-progress-bar.component';
import { MultipleBarsComponent } from './progress/multiple-bars/multiple-bars.component';
import { ProgressNumberStepsComponent } from './progress/progress-number-steps/progress-number-steps.component';
import { CustomProgressBarsComponent } from './progress/custom-progress-bars/custom-progress-bars.component';
import { SmallProgressBarsComponent } from './progress/small-progress-bars/small-progress-bars.component';
import { LargeProgressBarsComponent } from './progress/large-progress-bars/large-progress-bars.component';
import { CustomHeightProgressBarsComponent } from './progress/custom-height-progress-bars/custom-height-progress-bars.component';
import { PopoverComponent } from './popover/popover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { BasicPopoverComponent } from './popover/basic-popover/basic-popover.component';
import { PopoverDirectionComponent } from './popover/popover-direction/popover-direction.component';
import { PopoverOffsetComponent } from './popover/popover-offset/popover-offset.component';
import { BasicTooltipComponent } from './tooltip/basic-tooltip/basic-tooltip.component';
import { TooltipDirectionsComponent } from './tooltip/tooltip-directions/tooltip-directions.component';
import { ColoredTooltipComponent } from './tooltip/colored-tooltip/colored-tooltip.component';
import { FilledTooltipComponent } from './tooltip/filled-tooltip/filled-tooltip.component';
import { HtmlElementsClickEventComponent } from './tooltip/html-elements-click-event/html-elements-click-event.component';
import { CommonTopAlertsComponent } from './alert/common-top-alerts/common-top-alerts.component';
import { ColorAlertOutlineComponent } from './alert/color-alert-outline/color-alert-outline.component';
import { IconsTextAlertsComponent } from './alert/icons-text-alerts/icons-text-alerts.component';
import { LiveAlertComponent } from './alert/live-alert/live-alert.component';
import { BorderDirectionAlertComponent } from './alert/border-direction-alert/border-direction-alert.component';
import { AdditionalContentComponent } from './alert/additional-content/additional-content.component';
import { ModalComponent } from './modal/modal.component';
import { BasicModalComponent } from './modal/basic-modal/basic-modal.component';
import { ScrollingContentComponent } from './modal/basic-modal/scrolling-content/scrolling-content.component';
import { SimpleComponent } from './modal/basic-modal/simple/simple.component';
import { TooltipsPopoversComponent } from './modal/basic-modal/tooltips-popovers/tooltips-popovers.component';
import { SizesModalComponent } from './modal/sizes-modal/sizes-modal.component';
import { FullScreenModalComponent } from './modal/sizes-modal/full-screen-modal/full-screen-modal.component';
import { ExtraLargeModalComponent } from './modal/sizes-modal/extra-large-modal/extra-large-modal.component';
import { LargeModalComponent } from './modal/sizes-modal/large-modal/large-modal.component';
import { SmallModalComponent } from './modal/sizes-modal/small-modal/small-modal.component';
import { FullscreenModalComponent } from './modal/fullscreen-modal/fullscreen-modal.component';
import { FullscreenSimpleModalComponent } from './modal/fullscreen-modal/fullscreen-simple-modal/fullscreen-simple-modal.component';
import { FullscreenSmModalComponent } from './modal/fullscreen-modal/fullscreen-sm-modal/fullscreen-sm-modal.component';
import { FullscreenXlModalComponent } from './modal/fullscreen-modal/fullscreen-xl-modal/fullscreen-xl-modal.component';
import { FullscreenMdModalComponent } from './modal/fullscreen-modal/fullscreen-md-modal/fullscreen-md-modal.component';
import { FullscreenLgModalComponent } from './modal/fullscreen-modal/fullscreen-lg-modal/fullscreen-lg-modal.component';
import { FullscreenXxlModalComponent } from './modal/fullscreen-modal/fullscreen-xxl-modal/fullscreen-xxl-modal.component';
import { CenteredModalComponent } from './modal/centered-modal/centered-modal.component';
import { ToggleBetweenModalsComponent } from './modal/toggle-between-modals/toggle-between-modals.component';
import { StaticBackdropModalComponent } from './modal/static-backdrop-modal/static-backdrop-modal.component';
import { CustomModalsComponent } from './modal/custom-modals/custom-modals.component';
import { ProfileModalComponent } from './modal/custom-modals/profile-modal/profile-modal.component';
import { ResultModalComponent } from './modal/custom-modals/result-modal/result-modal.component';
import { BalanceModalComponent } from './modal/custom-modals/balance-modal/balance-modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';
import { BasicDropdownComponent } from './dropdown/basic-dropdown/basic-dropdown.component';
import { RoundedDropdownComponent } from './dropdown/rounded-dropdown/rounded-dropdown.component';
import { SplitDropdownComponent } from './dropdown/split-dropdown/split-dropdown.component';
import { HeadingDropdownComponent } from './dropdown/heading-dropdown/heading-dropdown.component';
import { InputDropdownComponent } from './dropdown/input-dropdown/input-dropdown.component';
import { DarkDropdownComponent } from './dropdown/dark-dropdown/dark-dropdown.component';
import { UniqueDropdownComponent } from './dropdown/unique-dropdown/unique-dropdown.component';
import { JustifyContentDropdownComponent } from './dropdown/justify-content-dropdown/justify-content-dropdown.component';
import { AlignmentsComponent } from './dropdown/alignments/alignments.component';
import { HelperDropdownComponent } from './dropdown/helper-dropdown/helper-dropdown.component';
import { DividerDropdownComponent } from './dropdown/divider-dropdown/divider-dropdown.component';
import { SizingDropdownComponent } from './dropdown/sizing-dropdown/sizing-dropdown.component';
import { SimpleAccordionComponent } from './accordion/simple-accordion/simple-accordion.component';
import { FlushAccordionComponent } from './accordion/flush-accordion/flush-accordion.component';
import { MultipleCollapseAccordionComponent } from './accordion/multiple-collapse-accordion/multiple-collapse-accordion.component';
import { IconsAccordionComponent } from './accordion/icons-accordion/icons-accordion.component';
import { HorizontalAccordionComponent } from './accordion/horizontal-accordion/horizontal-accordion.component';
import { SimpleTabsComponent } from './tabs/simple-tabs/simple-tabs.component';
import { IconsTabsComponent } from './tabs/icons-tabs/icons-tabs.component';
import { VerticalTabsComponent } from './tabs/vertical-tabs/vertical-tabs.component';
import { PillsTabsComponent } from './tabs/pills-tabs/pills-tabs.component';
import { JustifyTabsComponent } from './tabs/justify-tabs/justify-tabs.component';
import { MaterialStyleLeftTabsComponent } from './tabs/material-style-left-tabs/material-style-left-tabs.component';
import { MaterialStyleTabsComponent } from './tabs/material-style-tabs/material-style-tabs.component';
import { BorderTabsComponent } from './tabs/border-tabs/border-tabs.component';
import { TopCommonListsComponent } from './lists/top-common-lists/top-common-lists.component';
import { ContextualClassesComponent } from './lists/contextual-classes/contextual-classes.component';
import { CustomContentListsComponent } from './lists/custom-content-lists/custom-content-lists.component';
import { CheckboxListsComponent } from './lists/checkbox-lists/checkbox-lists.component';
import { RadiosListsComponent } from './lists/radios-lists/radios-lists.component';
import { NumbersListsComponent } from './lists/numbers-lists/numbers-lists.component';
import { NumbersBadgeListsComponent } from './lists/numbers-badge-lists/numbers-badge-lists.component';
import { DisabledListsComponent } from './lists/disabled-lists/disabled-lists.component';
import { ScrollableListsComponent } from './lists/scrollable-lists/scrollable-lists.component';
import { JavaScriptBehaviorComponent } from './lists/java-script-behavior/java-script-behavior.component';
import { AvatarInitialComponent } from './avatars/avatar-initial/avatar-initial.component';
import { AvatarPingComponent } from './avatars/avatar-ping/avatar-ping.component';
import { AvatarProfileComponent } from './avatars/avatar-profile/avatar-profile.component';
import { OutlineAlertComponent } from './alert/outline-alert/outline-alert.component';
import { AlertWithIconsComponent } from './alert/alert-with-icons/alert-with-icons.component';
import { DismissingDarkAlertComponent } from './alert/dismissing-dark-alert/dismissing-dark-alert.component';
import { DismissingLightAlertComponent } from './alert/dismissing-light-alert/dismissing-light-alert.component';
import { LeftBorderAlertComponent } from './alert/left-border-alert/left-border-alert.component';
import { OutlineAccordionComponent } from './accordion/outline-accordion/outline-accordion.component';
import { CollapseAccordionComponent } from './accordion/collapse-accordion/collapse-accordion.component';
import { OpenModalComponent } from './modal/basic-modal/open-modal/open-modal.component';
import { HorizontalListsComponent } from './lists/horizontal-lists/horizontal-lists.component';

@NgModule({
  declarations: [
    TypographyComponent,
    AvatarsComponent,
    HeadingsComponent,
    ColoredHeadingsComponent,
    FontWeightComponent,
    ListingTypographyComponent,
    DisplayHeadingComponent,
    InlineTextElementsComponent,
    TextColorComponent,
    BlockquotesComponent,
    SizesComponent,
    StatusIndicatorComponent,
    ShapesComponent,
    GroupingComponent,
    RatioComponent,
    HelperClassesComponent,
    GridComponent,
    GridOptionComponent,
    GridColumnComponent,
    VerticalAlignmentComponent,
    HorizontalAlignmentComponent,
    NestingComponent,
    OrderComponent,
    OffsetComponent,
    StylesBordersComponent,
    BorderDisplaysComponent,
    StylesBackgroudComponent,
    BorderColorComponent,
    ImagesSizesComponent,
    FontStyleComponent,
    FontWeightComponent,
    TextColorComponent,
    FontSizeComponent,
    CommonBorderstyleComponent,
    CommonBorderDisplayComponent,
    CommonStylesBackgroundComponent,
    TagPillsComponent,
    ProgressComponent,
    CommonBadgePillsComponent,
    BadgeHeadingsComponent,
    BadgesButtonsComponent,
    CommonProgressBarComponent,
    MultipleBarsComponent,
    ProgressNumberStepsComponent,
    CustomProgressBarsComponent,
    SmallProgressBarsComponent,
    LargeProgressBarsComponent,
    CustomHeightProgressBarsComponent,
    PopoverComponent,
    TooltipComponent,
    AlertComponent,
    BasicPopoverComponent,
    PopoverDirectionComponent,
    PopoverOffsetComponent,
    BasicTooltipComponent,
    TooltipDirectionsComponent,
    ColoredTooltipComponent,
    FilledTooltipComponent,
    HtmlElementsClickEventComponent,
    CommonTopAlertsComponent,
    ColorAlertOutlineComponent,
    IconsTextAlertsComponent,
    LiveAlertComponent,
    BorderDirectionAlertComponent,
    AdditionalContentComponent,
    ModalComponent,
    BasicModalComponent,
    ScrollingContentComponent,
    SimpleComponent,
    TooltipsPopoversComponent,
    SizesModalComponent,
    FullScreenModalComponent,
    ExtraLargeModalComponent,
    LargeModalComponent,
    SmallModalComponent,
    FullscreenModalComponent,
    FullscreenSimpleModalComponent,
    FullscreenSmModalComponent,
    FullscreenXlModalComponent,
    FullscreenMdModalComponent,
    FullscreenLgModalComponent,
    FullscreenXxlModalComponent,
    CenteredModalComponent,
    ToggleBetweenModalsComponent,
    StaticBackdropModalComponent,
    CustomModalsComponent,
    ProfileModalComponent,
    ResultModalComponent,
    BalanceModalComponent,
    DropdownComponent,
    AccordionComponent,
    TabsComponent,
    ListsComponent,
    BasicDropdownComponent,
    RoundedDropdownComponent,
    SplitDropdownComponent,
    HeadingDropdownComponent,
    InputDropdownComponent,
    DarkDropdownComponent,
    UniqueDropdownComponent,
    JustifyContentDropdownComponent,
    AlignmentsComponent,
    HelperDropdownComponent,
    DividerDropdownComponent,
    SizingDropdownComponent,
    SimpleAccordionComponent,
    FlushAccordionComponent,
    MultipleCollapseAccordionComponent,
    IconsAccordionComponent,
    HorizontalAccordionComponent,
    SimpleTabsComponent,
    IconsTabsComponent,
    VerticalTabsComponent,
    PillsTabsComponent,
    JustifyTabsComponent,
    MaterialStyleLeftTabsComponent,
    MaterialStyleTabsComponent,
    BorderTabsComponent,
    TopCommonListsComponent,
    ContextualClassesComponent,
    CustomContentListsComponent,
    CheckboxListsComponent,
    RadiosListsComponent,
    NumbersListsComponent,
    NumbersBadgeListsComponent,
    DisabledListsComponent,
    ScrollableListsComponent,
    JavaScriptBehaviorComponent,
    AvatarInitialComponent,
    AvatarPingComponent,
    AvatarProfileComponent,
    OutlineAlertComponent,
    AlertWithIconsComponent,
    DismissingDarkAlertComponent,
    DismissingLightAlertComponent,
    LeftBorderAlertComponent,
    OutlineAccordionComponent,
    CollapseAccordionComponent,
    OpenModalComponent,
    HorizontalListsComponent
  ],
  imports: [
    CommonModule,
    UiKitsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UiKitsModule { }
