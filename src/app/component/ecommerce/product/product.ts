import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { Filter } from './filter/filter';
import { ProductBox } from './product-box/product-box';

@Component({
    selector: 'app-product',
    imports: [CommonModule, Feathericon, ClickOutsideDirective, Filter, ProductBox],
    templateUrl: './product.html',
    styleUrl: './product.scss'
})
export class Product {

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public OpenFilter: boolean = false;

  private ProductBoxFilterService = inject(ProductBoxFilterService);

  gridOpens() {
    this.listView = false
    this.ProductBoxFilterService.gridOpen()
  }
  listOpens() {
    this.listView = true
    this.ProductBoxFilterService.listOpen()
  }
  grid2s() {
    this.listView = false
    this.ProductBoxFilterService.grid2()

  }
  grid3s() {
    this.listView = false
    this.ProductBoxFilterService.grid3()
  }
  grid6s() {
    this.listView = false
    this.ProductBoxFilterService.grid6()
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar
  }
  
  openFilter() {
    this.openSidebar = !this.openSidebar
  }

  clickOutside():void { 
    this.openSidebar = false;
  }


}
