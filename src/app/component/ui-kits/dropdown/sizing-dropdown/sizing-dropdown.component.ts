import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizing-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './sizing-dropdown.component.html',
  styleUrl: './sizing-dropdown.component.scss'
})
export class SizingDropdownComponent {

}
