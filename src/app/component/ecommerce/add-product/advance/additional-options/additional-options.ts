import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
    selector: 'app-additional-options',
    imports: [CommonModule, AngularEditorModule],
    templateUrl: './additional-options.html',
    styleUrl: './additional-options.scss'
})
export class AdditionalOptions {

  public htmlContent = '';

}
