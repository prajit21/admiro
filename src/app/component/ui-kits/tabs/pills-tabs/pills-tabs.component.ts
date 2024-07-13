import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tabs',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './pills-tabs.component.html',
  styleUrl: './pills-tabs.component.scss'
})
export class PillsTabsComponent {

  public active = 3;

}
