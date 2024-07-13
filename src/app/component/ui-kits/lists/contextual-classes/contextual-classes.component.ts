import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContextualClasses } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-contextual-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contextual-classes.component.html',
  styleUrl: './contextual-classes.component.scss'
})
export class ContextualClassesComponent {

  public contextualData = ContextualClasses;

}
