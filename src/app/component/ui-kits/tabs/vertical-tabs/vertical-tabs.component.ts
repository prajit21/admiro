import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-vertical-tabs',
    imports: [CommonModule, NgbModule],
    templateUrl: './vertical-tabs.component.html',
    styleUrl: './vertical-tabs.component.scss'
})
export class VerticalTabsComponent {

  public active = 2;

}
