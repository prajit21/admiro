import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-offset',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './popover-offset.component.html',
  styleUrl: './popover-offset.component.scss'
})
export class PopoverOffsetComponent {

}
