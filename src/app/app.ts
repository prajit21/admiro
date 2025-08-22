import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TapToTop } from './shared/component/tap-to-top/tap-to-top';
import { Loader } from './shared/component/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TapToTop,Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
