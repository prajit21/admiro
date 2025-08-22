import { Directive, Input, input, output } from '@angular/core';
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
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class CategoriesDirective {

  readonly sortableCategory = input<SortColumn>('');
  @Input() direction: SortDirection = '';
  readonly sort = output<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortableCategory(), direction: this.direction });
  }

}
