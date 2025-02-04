import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderPrimaryStateComponent } from './border-primary-state/border-primary-state.component';
import { BorderSecondaryStateComponent } from './border-secondary-state/border-secondary-state.component';
import { BorderWarningStateComponent } from './border-warning-state/border-warning-state.component';
import { CommonBorderCardComponent } from './common-border-card/common-border-card.component';
import { CommonBottomCardComponent } from './common-bottom-card/common-bottom-card.component';

@Component({
    selector: 'app-creative-card',
    imports: [CommonModule, BorderPrimaryStateComponent, BorderSecondaryStateComponent, BorderWarningStateComponent,
        CommonBorderCardComponent, CommonBottomCardComponent],
    templateUrl: './creative-card.component.html',
    styleUrl: './creative-card.component.scss'
})
export class CreativeCardComponent {

}
