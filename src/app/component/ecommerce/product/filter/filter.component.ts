import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filterData } from '../../../../shared/data/ecommerce/product';
import { BrandCheckbox, CategoryCheckbox } from '../../../../shared/data/ecommerce/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-filter',
    imports: [CommonModule, CarouselModule, NgxSliderModule, FormsModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss'
})
export class FilterComponent {

  public filter = filterData;
  public CategoryCheckboxData = CategoryCheckbox;
  public BarndCheckboxData = BrandCheckbox;
  public openSidebar: boolean = false
  public value2: number = 200;
  public maxvalue: number = 800;

 
  customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
  }

  options: Options = {
    floor: 0,
    ceil: 1000,
    showTicksValues: true,
    tickStep : 250
  };
  
  sidebarToggle() {
    this.openSidebar = !this.openSidebar
  }

}
