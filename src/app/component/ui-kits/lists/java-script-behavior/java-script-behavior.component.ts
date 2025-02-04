import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-java-script-behavior',
    imports: [CommonModule, NgbModule,],
    templateUrl: './java-script-behavior.component.html',
    styleUrl: './java-script-behavior.component.scss'
})
export class JavaScriptBehaviorComponent {

  public active = 1;

}
