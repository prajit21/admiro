import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-brand',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './brand.component.html',
    styleUrl: './brand.component.scss'
})
export class BrandComponent {

}
