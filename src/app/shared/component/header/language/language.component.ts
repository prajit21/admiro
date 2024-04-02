import { Component } from '@angular/core';
import { NavmenuService } from '../../../services/navmenu.service';

interface selectedlanguage {
  language?: string;
  code?: any;
  type?: string;
  icon?: string;
}

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  public language: boolean = false;

  public languages: selectedlanguage[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  public selectedLanguage: selectedlanguage = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }
  
  constructor(public navServices: NavmenuService) { }

  ngOnInit() {}



}
