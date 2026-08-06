import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AlignmentBreadcrumb } from './alignment-breadcrumb/alignment-breadcrumb';
import { ColoredBreadcrumb } from './colored-breadcrumb/colored-breadcrumb';
import { DefaultBreadcrumb } from './default-breadcrumb/default-breadcrumb';
import { DividerBreadcrumb } from './divider-breadcrumb/divider-breadcrumb';
import { IconsBreadcrumb } from './icons-breadcrumb/icons-breadcrumb';
import { SimpleBreadcrumb } from './simple-breadcrumb/simple-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    AlignmentBreadcrumb,
    ColoredBreadcrumb,
    DefaultBreadcrumb,
    DividerBreadcrumb,
    IconsBreadcrumb,
    SimpleBreadcrumb,
  ],
  templateUrl: './breadcrumb.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {}
