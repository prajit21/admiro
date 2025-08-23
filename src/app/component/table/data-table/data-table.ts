import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { SUPPORTDB } from '../../../shared/data/table/SupportTdb';
import {
  NgbdSortableHeaderDirective,
  SortEvent,
} from '../../../shared/directives/sortable.directive';
import { supportDB } from '../../../shared/interface/support';
import { TableService } from '../../../shared/services/table.service';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, FormsModule, NgbdSortableHeaderDirective, ReactiveFormsModule, NgbModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  providers: [TableService, DecimalPipe],
})
export class DataTable {
  public service = inject(TableService);

  public tableData$: Observable<supportDB[]>;
  public tableData = SUPPORTDB;
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective);

  constructor() {
    this.tableData$ = this.service.supportdata$;
    this.total$ = this.service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.tableData$.subscribe((data: supportDB[]) => {
      data.map((elem: supportDB, i: number) => {
        elem.id == id && data.splice(i, 1);
      });
    });
  }
}
