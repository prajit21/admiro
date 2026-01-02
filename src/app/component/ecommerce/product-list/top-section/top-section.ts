import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-top-section',
  imports: [RouterModule, Feathericon, NgClass],
  templateUrl: './top-section.html',
  styleUrl: './top-section.scss',
})
export class TopSection {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }
}
