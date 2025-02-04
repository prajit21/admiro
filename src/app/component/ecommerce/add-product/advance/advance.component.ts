import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AdditionalOptionsComponent } from './additional-options/additional-options.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShippingComponent } from './shipping/shipping.component';

@Component({
    selector: 'app-advance',
    imports: [CommonModule, AdditionalOptionsComponent, InventoryComponent, ShippingComponent],
    templateUrl: './advance.component.html',
    styleUrl: './advance.component.scss'
})
export class AdvanceComponent {

  @Output() activeSteps = new EventEmitter<number>();
  
  public activeStep: number = 5;
  public validate: boolean;
 
  public openTab: string = "Inventory";

  public tabbed(val: string) {
    this.openTab = val
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
