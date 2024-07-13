import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Listradios } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-radios-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radios-lists.component.html',
  styleUrl: './radios-lists.component.scss'
})
export class RadiosListsComponent {

  public listradiosData = Listradios;

}
