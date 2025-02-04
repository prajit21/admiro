import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-border-tabs',
    imports: [CommonModule, NgbModule],
    templateUrl: './border-tabs.component.html',
    styleUrl: './border-tabs.component.scss'
})
export class BorderTabsComponent {

  public active = 2;
}
