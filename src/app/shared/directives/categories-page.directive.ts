import { Directive, HostBinding, HostListener, input, output, signal } from '@angular/core';

import { Category } from '../data/ecommerce/categoies-page';

export type SortColumn = keyof Category | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortableCategory]',
})
export class CategoriesDirective {
  readonly sortableCategory = input<SortColumn>('');
  readonly direction = input<SortDirection>('');
  readonly sort = output<SortEvent>();

  public currentDirection = signal<SortDirection>(this.direction());

  @HostBinding('class.asc') get isAsc() {
    return this.currentDirection() === 'asc';
  }

  @HostBinding('class.desc') get isDesc() {
    return this.currentDirection() === 'desc';
  }

  @HostListener('click')
  rotateColumn() {
    this.currentDirection.set(rotate[this.currentDirection()]);
    this.sort.emit({ column: this.sortableCategory(), direction: this.currentDirection() });
  }
}
