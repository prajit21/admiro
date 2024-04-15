import { Component } from '@angular/core';
import { LatestUpdates } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-update',
  templateUrl: './latest-update.component.html',
  styleUrl: './latest-update.component.scss'
})
export class LatestUpdateComponent {

public update = LatestUpdates;

}
