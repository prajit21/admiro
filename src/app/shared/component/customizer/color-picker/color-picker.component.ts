import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {

  public primary: string = "#308e87";
  public secondary: string = "#f39159";
  public MIXLayout: string = "default";

  public primary_color = localStorage.getItem('primary_color') || '#308e87';
  public secondary_color = localStorage.getItem('secondary_color') || '#f39159';

  constructor(public layout: LayoutService) {
    document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    var primary = localStorage.getItem("primary_color") || this.layout.config.color.secondary_color;
    var secondary = localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#308e87");
    document.documentElement.style.setProperty("--theme-secondary", "#f39159");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = "#308e87";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = "#f39159";
    this.layout.config.color.primary_color = "#308e87";
    this.layout.config.color.secondary_color = "#f39159";
    localStorage.setItem("primary_color", "#308e87");
    localStorage.setItem("secondary_color", "#f39159");
    window.location.reload();
  }

}
