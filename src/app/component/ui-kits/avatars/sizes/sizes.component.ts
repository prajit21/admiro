import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { avatarSize } from '../../../../shared/data/ui-kits/avavtar';

@Component({
    selector: 'app-sizes',
    imports: [CommonModule],
    templateUrl: './sizes.component.html',
    styleUrl: './sizes.component.scss'
})
export class SizesComponent {

  public SizeData = avatarSize;

}
