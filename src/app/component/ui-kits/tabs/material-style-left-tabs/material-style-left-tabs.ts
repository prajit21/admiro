import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-material-style-left-tabs',
    imports: [CommonModule, NgbModule, Feathericon],
    templateUrl: './material-style-left-tabs.html',
    styleUrl: './material-style-left-tabs.scss'
})
export class MaterialStyleLeftTabs {

  public active = 1;

}
