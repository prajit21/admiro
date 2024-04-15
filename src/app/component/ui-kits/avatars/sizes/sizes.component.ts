import { Component } from '@angular/core';
import { avatarSize } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.scss'
})
export class SizesComponent {

  public SizeData = avatarSize;

}
