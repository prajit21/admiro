import { Component, QueryList, ViewChildren } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../shared/services/table.service';
import { supportDB } from '../../../shared/interface/support';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sortable.directive';
import { SUPPORTDB } from '../../../shared/data/table/SupportTdb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-data-table',
    imports: [CommonModule, FormsModule, NgbdSortableHeader, ReactiveFormsModule, NgbModule],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss',
    providers: [TableService, DecimalPipe]
})
export class DataTableComponent {

  public tableData$: Observable<supportDB[]>;
  public tableData =  SUPPORTDB;
  public total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TableService) {
    this.tableData$ = service.supportdata$;
    this.total$ = service.total$;
  }
  
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.tableData$.subscribe((data: supportDB[]) => {
      data.map((elem: supportDB, i: number) => { elem.id == id && data.splice(i, 1) })
    })
  }

}
