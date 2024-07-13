import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './heading-dropdown.component.html',
  styleUrl: './heading-dropdown.component.scss'
})
export class HeadingDropdownComponent {

}
