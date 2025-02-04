import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple-tabs',
    imports: [CommonModule, NgbModule],
    templateUrl: './simple-tabs.component.html',
    styleUrl: './simple-tabs.component.scss'
})
export class SimpleTabsComponent {

  public active = 2;

}
