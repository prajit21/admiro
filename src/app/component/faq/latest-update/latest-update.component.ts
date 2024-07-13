import { Component } from '@angular/core';
import { LatestUpdates } from '../../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-latest-update',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './latest-update.component.html',
  styleUrl: './latest-update.component.scss'
})
export class LatestUpdateComponent {

public update = LatestUpdates;

}
