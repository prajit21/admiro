import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navigationData1 } from '../../../shared/data/faq/faq';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-navigation',
    imports: [CommonModule, Feathericon],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss'
})
export class Navigation {

  public navigationData = navigationData1;


}
