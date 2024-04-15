import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  templateUrl: './unique-toast.component.html',
  styleUrl: './unique-toast.component.scss'
})
export class UniqueToastComponent {

  public Unique: boolean = true;

  close() {
    this.Unique = false;
  }

}
