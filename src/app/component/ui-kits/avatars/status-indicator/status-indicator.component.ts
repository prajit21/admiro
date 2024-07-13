import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusIndicator } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.scss'
})
export class StatusIndicatorComponent {

  public statusindicatorData = StatusIndicator;

}
