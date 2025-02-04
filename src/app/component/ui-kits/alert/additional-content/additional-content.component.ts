import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdditionalContent } from '../../../../shared/data/ui-kits/alert';

@Component({
    selector: 'app-additional-content',
    imports: [CommonModule],
    templateUrl: './additional-content.component.html',
    styleUrl: './additional-content.component.scss'
})
export class AdditionalContentComponent {

  public additionalData = AdditionalContent;

}
