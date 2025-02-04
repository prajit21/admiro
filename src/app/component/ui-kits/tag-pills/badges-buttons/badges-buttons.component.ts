import { Component } from '@angular/core';
import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-badges-buttons',
    imports: [CommonModule],
    templateUrl: './badges-buttons.component.html',
    styleUrl: './badges-buttons.component.scss'
})
export class BadgesButtonsComponent {

  public buttonspartData = BadgePartButtons;

}
