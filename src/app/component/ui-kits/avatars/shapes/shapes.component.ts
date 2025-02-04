import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Shapes } from '../../../../shared/data/ui-kits/avavtar';

@Component({
    selector: 'app-shapes',
    imports: [CommonModule],
    templateUrl: './shapes.component.html',
    styleUrl: './shapes.component.scss'
})
export class ShapesComponent {

  public shapesData = Shapes;

}
