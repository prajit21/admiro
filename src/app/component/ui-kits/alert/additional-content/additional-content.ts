import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AdditionalContents } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-additional-content',
  imports: [CommonModule],
  templateUrl: './additional-content.html',
  styleUrl: './additional-content.scss',
})
export class AdditionalContent {
  public additionalData = AdditionalContents;
}
