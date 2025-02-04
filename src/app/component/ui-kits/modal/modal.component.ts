import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { CenteredModalComponent } from './centered-modal/centered-modal.component';
import { CustomModalsComponent } from './custom-modals/custom-modals.component';
import { SizesModalComponent } from './sizes-modal/sizes-modal.component';
import { StaticBackdropModalComponent } from './static-backdrop-modal/static-backdrop-modal.component';
import { ToggleBetweenModalsComponent } from './toggle-between-modals/toggle-between-modals.component';
import { FullscreenModalComponent } from './fullscreen-modal/fullscreen-modal.component';

@Component({
    selector: 'app-modal',
    imports: [CommonModule, BasicModalComponent, CenteredModalComponent, CustomModalsComponent, FullscreenModalComponent,
        SizesModalComponent, StaticBackdropModalComponent, ToggleBetweenModalsComponent],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
