import { Component, inject, viewChildren } from '@angular/core';
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
    templateUrl: './data-table.html',
    styleUrl: './data-table.scss',
    providers: [TableService, DecimalPipe]
})
export class DataTable {

  public service = inject(TableService);

  public tableData$: Observable<supportDB[]>;
  public tableData =  SUPPORTDB;
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeader);

  constructor() {
    this.tableData$ = this.service.supportdata$;
    this.total$ = this.service.total$;
  }
  
  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortable() !== column) {
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
