import { Component } from '@angular/core';
import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-badges-buttons',
    imports: [CommonModule],
    templateUrl: './badges-buttons.html',
    styleUrl: './badges-buttons.scss'
})
export class BadgesButtons {

  public buttonspartData = BadgePartButtons;

}
