import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { HorizontalStyleComponent } from './horizontal-style/horizontal-style.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { OfferBordersStyleComponent } from './offer-borders-style/offer-borders-style.component';
import { SolidBorderStyleComponent } from './solid-border-style/solid-border-style.component';
import { VariationChecknoxComponent } from './variation-checknox/variation-checknox.component';
import { VariationRadioComponent } from './variation-radio/variation-radio.component';
import { VerticalStyleComponent } from './vertical-style/vertical-style.component';
import { WithoutBordersStyleComponent } from './without-borders-style/without-borders-style.component';

@Component({
    selector: 'app-mega-options',
    imports: [CommonModule, DefaultStyleComponent, HorizontalStyleComponent, InlineStyleComponent,
        OfferBordersStyleComponent, SolidBorderStyleComponent, VariationChecknoxComponent, VariationRadioComponent,
        VerticalStyleComponent, WithoutBordersStyleComponent],
    templateUrl: './mega-options.component.html',
    styleUrl: './mega-options.component.scss'
})
export class MegaOptionsComponent {

}
