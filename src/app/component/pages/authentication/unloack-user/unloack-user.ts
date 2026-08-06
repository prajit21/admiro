import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unloack-user',
  imports: [RouterModule],
  templateUrl: './unloack-user.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './unloack-user.scss',
})
export class UnloackUser {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
