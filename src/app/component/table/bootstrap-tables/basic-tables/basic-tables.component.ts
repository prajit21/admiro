import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderBottomColorComponent } from './border-bottom-color/border-bottom-color.component';
import { BreckpointSpecificComponent } from './breckpoint-specific/breckpoint-specific.component';
import { CaptionComponent } from './caption/caption.component';
import { DashedBorderComponent } from './dashed-border/dashed-border.component';
import { HoverStrippedTableComponent } from './hover-stripped-table/hover-stripped-table.component';
import { HoverableRowsHorizontalBorderComponent } from './hoverable-rows-horizontal-border/hoverable-rows-horizontal-border.component';
import { InverseTableComponent } from './inverse-table/inverse-table.component';
import { InverseTablePrimaryBackgroundComponent } from './inverse-table-primary-background/inverse-table-primary-background.component';
import { ResponsiveTablesLightBackgroundComponent } from './responsive-tables-light-background/responsive-tables-light-background.component';
import { SizingTablesComponent } from './sizing-tables/sizing-tables.component';
import { StripedRowInverseTableComponent } from './striped-row-inverse-table/striped-row-inverse-table.component';
import { TableHeadOptionsComponent } from './table-head-options/table-head-options.component';

@Component({
  selector: 'app-basic-tables',
  standalone: true,
  imports: [CommonModule, BorderBottomColorComponent, BreckpointSpecificComponent, CaptionComponent, DashedBorderComponent
    , HoverStrippedTableComponent, HoverableRowsHorizontalBorderComponent, InverseTableComponent, InverseTablePrimaryBackgroundComponent
    , ResponsiveTablesLightBackgroundComponent, SizingTablesComponent, StripedRowInverseTableComponent, TableHeadOptionsComponent],
  templateUrl: './basic-tables.component.html',
  styleUrl: './basic-tables.component.scss'
})
export class BasicTablesComponent {

}
