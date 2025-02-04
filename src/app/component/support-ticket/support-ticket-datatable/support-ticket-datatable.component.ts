import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SUPPORTDB, supportDB } from '../../../shared/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, SortEvent } from '../../../shared/directives/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-support-ticket-datatable',
    imports: [NgbdSortableHeader2, CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
    providers: [SupportTicketService, DecimalPipe],
    templateUrl: './support-ticket-datatable.component.html',
    styleUrl: './support-ticket-datatable.component.scss'
})
export class SupportTicketDatatableComponent {

  public countries$: Observable<supportDB[]>;
  public total$: Observable<number>;
  public supportData = SUPPORTDB;

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  get filteredData(): supportDB[] {
    return this.supportData.filter((person: { img: string, position: string, name: string, office: string, email: string ,experience:string }) => {
      return person.img.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.position.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.name.toLowerCase().includes(this.service.searchTerm.toLowerCase())||
        person.office.toLowerCase().includes(this.service.searchTerm.toLowerCase())||
        person.experience.toLowerCase().includes(this.service.searchTerm.toLowerCase())||
        person.email.toLowerCase().includes(this.service.searchTerm.toLowerCase())    
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
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
