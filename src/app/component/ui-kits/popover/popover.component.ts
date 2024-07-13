import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicPopoverComponent } from './basic-popover/basic-popover.component';
import { PopoverDirectionComponent } from './popover-direction/popover-direction.component';
import { PopoverOffsetComponent } from './popover-offset/popover-offset.component';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule,BasicPopoverComponent,PopoverDirectionComponent,PopoverOffsetComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {

}
