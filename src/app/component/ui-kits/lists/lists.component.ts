import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckboxListsComponent } from './checkbox-lists/checkbox-lists.component';
import { ContextualClassesComponent } from './contextual-classes/contextual-classes.component';
import { CustomContentListsComponent } from './custom-content-lists/custom-content-lists.component';
import { DisabledListsComponent } from './disabled-lists/disabled-lists.component';
import { HorizontalListsComponent } from './horizontal-lists/horizontal-lists.component';
import { JavaScriptBehaviorComponent } from './java-script-behavior/java-script-behavior.component';
import { NumbersBadgeListsComponent } from './numbers-badge-lists/numbers-badge-lists.component';
import { NumbersListsComponent } from './numbers-lists/numbers-lists.component';
import { RadiosListsComponent } from './radios-lists/radios-lists.component';
import { ScrollableListsComponent } from './scrollable-lists/scrollable-lists.component';
import { TopCommonListsComponent } from './top-common-lists/top-common-lists.component';

@Component({
    selector: 'app-lists',
    imports: [CommonModule, CheckboxListsComponent, ContextualClassesComponent, CustomContentListsComponent,
        DisabledListsComponent, HorizontalListsComponent, JavaScriptBehaviorComponent, NumbersBadgeListsComponent,
        NumbersListsComponent, RadiosListsComponent, ScrollableListsComponent, TopCommonListsComponent],
    templateUrl: './lists.component.html',
    styleUrl: './lists.component.scss'
})
export class ListsComponent {

}
