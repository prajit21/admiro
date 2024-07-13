import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetterboxSidebarComponent } from './letterbox-sidebar/letterbox-sidebar.component';

@Component({
  selector: 'app-letter-box',
  standalone: true,
  imports: [CommonModule,LetterboxSidebarComponent],
  templateUrl: './letter-box.component.html',
  styleUrl: './letter-box.component.scss'
})
export class LetterBoxComponent {

}
