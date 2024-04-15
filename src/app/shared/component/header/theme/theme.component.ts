import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {

public dark: boolean = this.layout.config.settings.layout_version == 'dark' ? true : false;

constructor(public layout: LayoutService) { }

layoutToggle() {
  this.dark = !this.dark;
  if(this.dark == true){
    document.getElementsByTagName('html')[0].setAttribute('data-theme','dark');
    document.body.className = 'dark';
  }
  else{
    document.getElementsByTagName('html')[0].setAttribute('data-theme','light');
    document.body.className = 'light';
  }
}


}
