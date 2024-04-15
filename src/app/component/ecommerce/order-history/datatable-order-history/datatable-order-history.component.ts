import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderdataTableDirective, SortEvent } from '../../../../shared/directives/orderdata.directive';
import { ORDERS } from '../../../../shared/interface/odershistory';
import { orderHistoryTable } from '../../../../shared/data/ecommerce/orderhistory';
import { OrderService } from '../../../../shared/services/ecommerce/order.service';

@Component({
  selector: 'app-datatable-order-history',
  templateUrl: './datatable-order-history.component.html',
  styleUrl: './datatable-order-history.component.scss'
})
export class DatatableOrderHistoryComponent {

  public products$: Observable<ORDERS[]>;
  public total$: Observable<number>;
  public Data:ORDERS[];
  public orderHistoryData = orderHistoryTable;

  @ViewChildren(OrderdataTableDirective) headers: QueryList<OrderdataTableDirective>;

  constructor(public service: OrderService) {
    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products$.subscribe((res) => {
      this.Data = res;
    });
  }


  get filteredData(): ORDERS[] {
    return this. orderHistoryData.filter((person: { productimg:string ,product:string, size:string,status:string,color:string} ) => {
      return person.productimg.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.product.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.status.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.size.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.color.toLowerCase().includes(this.service.searchTerm.toLowerCase())
    });
  }


  getStartingIndex(): number {
    if (this.filteredData.length === 0) {
      return 0;
    }
    return (this.service.page - 1) * this.service.pageSize + 1;
  }

  getEndingIndex(): number {
    const endIndex = this.service.page * this.service.pageSize;
    return endIndex > this.filteredData.length ? this.filteredData.length : endIndex;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortableOrder !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


}
