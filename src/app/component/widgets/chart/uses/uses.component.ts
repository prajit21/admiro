import { Component } from '@angular/core';
import { uses } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrl: './uses.component.scss'
})
export class UsesComponent {

  public userData = uses;

}
