import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unique-toast.component.html',
  styleUrl: './unique-toast.component.scss'
})
export class UniqueToastComponent {

  public Unique: boolean = true;

  close() {
    this.Unique = false;
  }

}
