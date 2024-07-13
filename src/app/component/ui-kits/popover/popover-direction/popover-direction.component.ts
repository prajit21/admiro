import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-direction',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './popover-direction.component.html',
  styleUrl: './popover-direction.component.scss'
})
export class PopoverDirectionComponent {

}
