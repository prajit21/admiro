import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unloack-user',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './unloack-user.component.html',
  styleUrl: './unloack-user.component.scss'
})
export class UnloackUserComponent {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
