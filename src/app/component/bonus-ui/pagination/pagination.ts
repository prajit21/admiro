import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ActiveDisabledPagination } from './active-disabled-pagination/active-disabled-pagination';
import { AlignmentPagination } from './alignment-pagination/alignment-pagination';
import { DefaultPagination } from './default-pagination/default-pagination';
import { IconsPagination } from './icons-pagination/icons-pagination';
import { RoundedPagination } from './rounded-pagination/rounded-pagination';
import { SizingPagination } from './sizing-pagination/sizing-pagination';
import { WithDisabled } from './with-disabled/with-disabled';
import { WithOutline } from './with-outline/with-outline';

@Component({
  selector: 'app-pagination',
  imports: [
    ActiveDisabledPagination,
    AlignmentPagination,
    DefaultPagination,
    IconsPagination,
    RoundedPagination,
    SizingPagination,
    WithDisabled,
    WithOutline,
  ],
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pagination.scss',
})
export class Pagination {}
