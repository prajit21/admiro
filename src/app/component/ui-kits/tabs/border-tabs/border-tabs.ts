import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-border-tabs',
    imports: [CommonModule, NgbModule],
    templateUrl: './border-tabs.html',
    styleUrl: './border-tabs.scss'
})
export class BorderTabs {

  public active = 2;
}
