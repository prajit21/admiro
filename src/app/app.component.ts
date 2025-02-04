import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TapToTopComponent } from './shared/component/tap-to-top/tap-to-top.component';
import { LoaderComponent } from './shared/component/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TapToTopComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
