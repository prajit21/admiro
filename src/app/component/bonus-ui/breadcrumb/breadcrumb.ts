import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlignmentBreadcrumb } from './alignment-breadcrumb/alignment-breadcrumb';
import { ColoredBreadcrumb } from './colored-breadcrumb/colored-breadcrumb';
import { DefaultBreadcrumb } from './default-breadcrumb/default-breadcrumb';
import { DividerBreadcrumb } from './divider-breadcrumb/divider-breadcrumb';
import { IconsBreadcrumb } from './icons-breadcrumb/icons-breadcrumb';
import { SimpleBreadcrumb } from './simple-breadcrumb/simple-breadcrumb';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, AlignmentBreadcrumb, ColoredBreadcrumb, DefaultBreadcrumb,
        DividerBreadcrumb, IconsBreadcrumb, SimpleBreadcrumb],
    templateUrl: './breadcrumb.html',
    styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {

}
