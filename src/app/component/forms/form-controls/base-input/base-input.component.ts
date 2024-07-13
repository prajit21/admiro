import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicInputControlComponent } from './basic-input-control/basic-input-control.component';
import { EdgesStyleComponent } from './edges-style/edges-style.component';
import { FlatStyleComponent } from './flat-style/flat-style.component';
import { RaiseStyleComponent } from './raise-style/raise-style.component';
import { SimpleExampleComponent } from './simple-example/simple-example.component';
import { SizingComponent } from './sizing/sizing.component';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule, BasicInputControlComponent, EdgesStyleComponent, FlatStyleComponent,
     RaiseStyleComponent, SimpleExampleComponent, SizingComponent],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.scss'
})
export class BaseInputComponent {

}
