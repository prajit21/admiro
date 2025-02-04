import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopSectionComponent } from './top-section/top-section.component';
import { ProductlistDatatableComponent } from './productlist-datatable/productlist-datatable.component';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, TopSectionComponent, ProductlistDatatableComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}
