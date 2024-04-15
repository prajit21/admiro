import { Component } from '@angular/core';
import { Listradios } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-radios-lists',
  templateUrl: './radios-lists.component.html',
  styleUrl: './radios-lists.component.scss'
})
export class RadiosListsComponent {

  public listradiosData = Listradios;

}
