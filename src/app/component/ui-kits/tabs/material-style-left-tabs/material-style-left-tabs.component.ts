import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-material-style-left-tabs',
    imports: [CommonModule, NgbModule, FeathericonComponent],
    templateUrl: './material-style-left-tabs.component.html',
    styleUrl: './material-style-left-tabs.component.scss'
})
export class MaterialStyleLeftTabsComponent {

  public active = 1;

}
