import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullscreenLgModalComponent } from './fullscreen-lg-modal/fullscreen-lg-modal.component';
import { FullscreenMdModalComponent } from './fullscreen-md-modal/fullscreen-md-modal.component';
import { FullscreenSimpleModalComponent } from './fullscreen-simple-modal/fullscreen-simple-modal.component';
import { FullscreenSmModalComponent } from './fullscreen-sm-modal/fullscreen-sm-modal.component';
import { FullscreenXlModalComponent } from './fullscreen-xl-modal/fullscreen-xl-modal.component';
import { FullscreenXxlModalComponent } from './fullscreen-xxl-modal/fullscreen-xxl-modal.component';

@Component({
  selector: 'app-fullscreen-modal',
  standalone: true,
  imports: [CommonModule, FullscreenLgModalComponent, FullscreenMdModalComponent, FullscreenSimpleModalComponent
    , FullscreenSmModalComponent, FullscreenXlModalComponent, FullscreenXxlModalComponent],
  templateUrl: './fullscreen-modal.component.html',
  styleUrl: './fullscreen-modal.component.scss'
})
export class FullscreenModalComponent {

}
