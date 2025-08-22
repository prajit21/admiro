import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopSection } from './top-section/top-section';
import { ProductlistDatatable } from './productlist-datatable/productlist-datatable';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, TopSection, ProductlistDatatable],
    templateUrl: './product-list.html',
    styleUrl: './product-list.scss'
})
export class ProductList {

}
