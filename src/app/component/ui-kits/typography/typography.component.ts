import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlockquotesComponent } from './blockquotes/blockquotes.component';
import { ColoredHeadingsComponent } from './colored-headings/colored-headings.component';
import { DisplayHeadingComponent } from './display-heading/display-heading.component';
import { FontWeightComponent } from './font-weight/font-weight.component';
import { HeadingsComponent } from './headings/headings.component';
import { ListingTypographyComponent } from './listing-typography/listing-typography.component';
import { InlineTextElementsComponent } from './inline-text-elements/inline-text-elements.component';
import { TextColorComponent } from './text-color/text-color.component';

@Component({
    selector: 'app-typography',
    imports: [CommonModule, BlockquotesComponent, ColoredHeadingsComponent, DisplayHeadingComponent,
        FontWeightComponent, HeadingsComponent, ListingTypographyComponent, InlineTextElementsComponent,
        ListingTypographyComponent, TextColorComponent],
    templateUrl: './typography.component.html',
    styleUrl: './typography.component.scss'
})
export class TypographyComponent {

}
