import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icons-tabs',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './icons-tabs.component.html',
  styleUrl: './icons-tabs.component.scss'
})
export class IconsTabsComponent {

  public active = 1;

}
