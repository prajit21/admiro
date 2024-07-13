import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlignmentBreadcrumbComponent } from './alignment-breadcrumb/alignment-breadcrumb.component';
import { ColoredBreadcrumbComponent } from './colored-breadcrumb/colored-breadcrumb.component';
import { DefaultBreadcrumbComponent } from './default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './divider-breadcrumb/divider-breadcrumb.component';
import { IconsBreadcrumbComponent } from './icons-breadcrumb/icons-breadcrumb.component';
import { SimpleBreadcrumbComponent } from './simple-breadcrumb/simple-breadcrumb.component';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, AlignmentBreadcrumbComponent, ColoredBreadcrumbComponent, DefaultBreadcrumbComponent
    , DividerBreadcrumbComponent, IconsBreadcrumbComponent, SimpleBreadcrumbComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

}
