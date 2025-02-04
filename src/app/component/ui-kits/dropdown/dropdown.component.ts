import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlignmentsComponent } from './alignments/alignments.component';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';
import { DarkDropdownComponent } from './dark-dropdown/dark-dropdown.component';
import { HeadingDropdownComponent } from './heading-dropdown/heading-dropdown.component';
import { DividerDropdownComponent } from './divider-dropdown/divider-dropdown.component';
import { HelperDropdownComponent } from './helper-dropdown/helper-dropdown.component';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';
import { JustifyContentDropdownComponent } from './justify-content-dropdown/justify-content-dropdown.component';
import { RoundedDropdownComponent } from './rounded-dropdown/rounded-dropdown.component';
import { SizingDropdownComponent } from './sizing-dropdown/sizing-dropdown.component';
import { SplitDropdownComponent } from './split-dropdown/split-dropdown.component';
import { UniqueDropdownComponent } from './unique-dropdown/unique-dropdown.component';

@Component({
    selector: 'app-dropdown',
    imports: [CommonModule, AlignmentsComponent, BasicDropdownComponent, DarkDropdownComponent, DividerDropdownComponent,
        HeadingDropdownComponent, HelperDropdownComponent, InputDropdownComponent, JustifyContentDropdownComponent,
        RoundedDropdownComponent, SizingDropdownComponent, SplitDropdownComponent, UniqueDropdownComponent],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {


}
