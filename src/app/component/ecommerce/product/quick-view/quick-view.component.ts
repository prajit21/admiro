import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Products } from '../../../../shared/model/product.model';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-quick-view',
    imports: [CommonModule, RouterModule],
    templateUrl: './quick-view.component.html',
    styleUrl: './quick-view.component.scss'
})
export class QuickViewComponent {

  public counter: number = 1;
  public closeResult: string;
  public modalOpen: boolean = false;
 
  @Input() productDetails: Products;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

}

