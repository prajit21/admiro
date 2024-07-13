import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertsTableComponent } from './alerts-table/alerts-table.component';
import { BadgesTableComponent } from './badges-table/badges-table.component';
import { CheckboxTableComponent } from './checkbox-table/checkbox-table.component';
import { InputTableComponent } from './input-table/input-table.component';
import { ProgressbarTableComponent } from './progressbar-table/progressbar-table.component';
import { RadioTableComponent } from './radio-table/radio-table.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { SwitchTableComponent } from './switch-table/switch-table.component';
import { TooltipTableComponent } from './tooltip-table/tooltip-table.component';
import { UiTableComponent } from './ui-table/ui-table.component';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule, AlertsTableComponent, BadgesTableComponent, CheckboxTableComponent, InputTableComponent
    , ProgressbarTableComponent, RadioTableComponent, SelectTableComponent, SwitchTableComponent, TooltipTableComponent,
    UiTableComponent],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss'
})
export class TableComponentComponent {

}
