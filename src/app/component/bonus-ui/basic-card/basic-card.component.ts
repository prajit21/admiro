import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonInfoCardComponent } from './common-info-card/common-info-card.component';
import { DarkColorCardComponent } from './dark-color-card/dark-color-card.component';
import { TopCommonCardComponent } from './top-common-card/top-common-card.component';

@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [CommonModule, CommonInfoCardComponent, DarkColorCardComponent, TopCommonCardComponent],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {

}
