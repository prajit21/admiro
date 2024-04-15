import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-form-validation',
  templateUrl: './tooltip-form-validation.component.html',
  styleUrl: './tooltip-form-validation.component.scss'
})
export class TooltipFormValidationComponent {

  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }

}
