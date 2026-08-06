import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-java-script-behavior',
  imports: [NgbModule],
  templateUrl: './java-script-behavior.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './java-script-behavior.scss',
})
export class JavaScriptBehavior {
  public active = 1;
}
