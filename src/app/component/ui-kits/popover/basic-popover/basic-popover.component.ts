import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-popover',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './basic-popover.component.html',
  styleUrl: './basic-popover.component.scss'
})
export class BasicPopoverComponent {

}
