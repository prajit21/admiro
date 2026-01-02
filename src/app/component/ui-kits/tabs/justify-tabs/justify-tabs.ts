
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { webDesigner, UxDesigner, IOTdeveloper } from '../../../../shared/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tabs',
  imports: [NgbModule],
  templateUrl: './justify-tabs.html',
  styleUrl: './justify-tabs.scss',
})
export class JustifyTabs {
  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;
}
