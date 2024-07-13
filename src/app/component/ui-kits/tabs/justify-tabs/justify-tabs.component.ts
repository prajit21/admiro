import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { webDesigner, UxDesigner, IOTdeveloper } from '../../../../shared/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tabs',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './justify-tabs.component.html',
  styleUrl: './justify-tabs.component.scss'
})
export class JustifyTabsComponent {

  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;

}
