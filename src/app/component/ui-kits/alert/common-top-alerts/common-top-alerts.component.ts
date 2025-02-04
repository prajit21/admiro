import { CommonModule } from '@angular/common';
import { Component ,Input } from '@angular/core';
import { alert } from '../../../../shared/data/ui-kits/alert';

@Component({
    selector: 'app-common-top-alerts',
    imports: [CommonModule],
    templateUrl: './common-top-alerts.component.html',
    styleUrl: './common-top-alerts.component.scss'
})
export class CommonTopAlertsComponent {

@Input() data:alert[]

}
