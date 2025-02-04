import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsWithPrefixPostfixComponent } from './buttons-with-prefix-postfix/buttons-with-prefix-postfix.component';
import { DefaultTouchspinComponent } from './default-touchspin/default-touchspin.component';
import { IconsWithPrefixPostfixComponent } from './icons-with-prefix-postfix/icons-with-prefix-postfix.component';
import { OutlinedTouchspinComponent } from './outlined-touchspin/outlined-touchspin.component';
import { RoundedTouchspinComponent } from './rounded-touchspin/rounded-touchspin.component';

@Component({
    selector: 'app-touchspin',
    imports: [CommonModule, ButtonsWithPrefixPostfixComponent, DefaultTouchspinComponent, IconsWithPrefixPostfixComponent,
        OutlinedTouchspinComponent, RoundedTouchspinComponent],
    templateUrl: './touchspin.component.html',
    styleUrl: './touchspin.component.scss'
})
export class TouchspinComponent {

}
