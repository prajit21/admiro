import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorSchemesComponent } from './color-schemes/color-schemes.component';
import { DefaultToastComponent } from './default-toast/default-toast.component';
import { LiveToastComponent } from './live-toast/live-toast.component';
import { StackingToastComponent } from './stacking-toast/stacking-toast.component';
import { TranslucentToastComponent } from './translucent-toast/translucent-toast.component';
import { UniqueToastComponent } from './unique-toast/unique-toast.component';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule,ColorSchemesComponent,DefaultToastComponent,LiveToastComponent
  ,StackingToastComponent,TranslucentToastComponent,UniqueToastComponent],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})
export class ToastsComponent {

}
