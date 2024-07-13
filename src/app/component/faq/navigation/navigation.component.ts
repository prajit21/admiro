import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navigationData1 } from '../../../shared/data/faq/faq';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  public navigationData = navigationData1;


}
