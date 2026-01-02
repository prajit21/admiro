import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-border-alert',
  imports: [NgClass],
  templateUrl: './left-border-alert.html',
  styleUrl: './left-border-alert.scss',
})
export class LeftBorderAlert {
  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }
}
