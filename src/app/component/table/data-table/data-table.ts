import { DecimalPipe, AsyncPipe } from '@angular/common';
import { Component, inject, viewChildren, ChangeDetectionStrategy } from '@angular/core';
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
  imports: [
    FormsModule,
    NgbdSortableHeaderDirective,
    ReactiveFormsModule,
    NgbModule,
    AsyncPipe,
    DecimalPipe,
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
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
        header.currentDirection.set('');
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
