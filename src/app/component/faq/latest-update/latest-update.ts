import { Component } from '@angular/core';
import { LatestUpdates } from '../../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-latest-update',
    imports: [CommonModule, Feathericon],
    templateUrl: './latest-update.html',
    styleUrl: './latest-update.scss'
})
export class LatestUpdate {

public update = LatestUpdates;

}
