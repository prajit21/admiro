import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './input-dropdown.component.html',
  styleUrl: './input-dropdown.component.scss'
})
export class InputDropdownComponent {

}
