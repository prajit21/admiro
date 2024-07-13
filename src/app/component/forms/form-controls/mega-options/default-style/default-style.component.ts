import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-style.component.html',
  styleUrl: './default-style.component.scss'
})
export class DefaultStyleComponent {

}
