import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvanceSweetalertComponent } from './advance-sweetalert/advance-sweetalert.component';
import { BasicSweetalertComponent } from './basic-sweetalert/basic-sweetalert.component';
import { DirectionSweetalertComponent } from './direction-sweetalert/direction-sweetalert.component';
import { GithubAvatarComponent } from './github-avatar/github-avatar.component';
import { InputSweetalertComponent } from './input-sweetalert/input-sweetalert.component';
import { MessageTimerComponent } from './message-timer/message-timer.component';
import { ModalWithImageComponent } from './modal-with-image/modal-with-image.component';
import { RtlSupportComponent } from './rtl-support/rtl-support.component';
import { UniqueSweetalertComponent } from './unique-sweetalert/unique-sweetalert.component';

@Component({
  selector: 'app-sweetalert2',
  standalone: true,
  imports: [CommonModule, AdvanceSweetalertComponent, BasicSweetalertComponent, DirectionSweetalertComponent
    , GithubAvatarComponent, InputSweetalertComponent, MessageTimerComponent, ModalWithImageComponent, RtlSupportComponent
    , UniqueSweetalertComponent],
  templateUrl: './sweetalert2.component.html',
  styleUrl: './sweetalert2.component.scss'
})
export class Sweetalert2Component {

}
