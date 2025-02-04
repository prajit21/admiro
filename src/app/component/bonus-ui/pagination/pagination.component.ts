import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActiveDisabledPaginationComponent } from './active-disabled-pagination/active-disabled-pagination.component';
import { AlignmentPaginationComponent } from './alignment-pagination/alignment-pagination.component';
import { DefaultPaginationComponent } from './default-pagination/default-pagination.component';
import { IconsPaginationComponent } from './icons-pagination/icons-pagination.component';
import { RoundedPaginationComponent } from './rounded-pagination/rounded-pagination.component';
import { SizingPaginationComponent } from './sizing-pagination/sizing-pagination.component';
import { WithDisabledComponent } from './with-disabled/with-disabled.component';
import { WithOutlineComponent } from './with-outline/with-outline.component';


@Component({
    selector: 'app-pagination',
    imports: [CommonModule, ActiveDisabledPaginationComponent, AlignmentPaginationComponent, DefaultPaginationComponent,
        IconsPaginationComponent, RoundedPaginationComponent, SizingPaginationComponent, WithDisabledComponent,
        WithOutlineComponent],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

}
