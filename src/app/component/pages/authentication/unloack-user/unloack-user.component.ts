import { Component } from '@angular/core';

@Component({
  selector: 'app-unloack-user',
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
