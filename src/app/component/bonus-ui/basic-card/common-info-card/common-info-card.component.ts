import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { commonInfoData } from '../../../../shared/data/bonus-ui/basic-card';

@Component({
  selector: 'app-common-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-info-card.component.html',
  styleUrl: './common-info-card.component.scss'
})
export class CommonInfoCardComponent {

  public InfoData = commonInfoData;

}
