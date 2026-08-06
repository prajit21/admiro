import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-additional-options',
  imports: [AngularEditorModule],
  templateUrl: './additional-options.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './additional-options.scss',
})
export class AdditionalOptions {
  public htmlContent = '';
}
