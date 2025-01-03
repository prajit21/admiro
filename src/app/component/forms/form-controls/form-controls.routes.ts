import { Routes } from '@angular/router';
import { BaseInputComponent } from './base-input/base-input.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { InputMaskComponent } from './input-mask/input-mask.component';

export const formContols: Routes = [
    {
        path: '',
        children: [
          {
            path: 'base-input',
            component: BaseInputComponent,
            data: {
              title: "Base Inputs",
              breadcrumb: "Base Inputs",
            }
          },
          {
            path: 'checkbox-radio',
            component: CheckboxRadioComponent,
            data: {
              title: "Checkbox & Radio",
              breadcrumb: "Checkbox-Radio",
            }
          },
          {
            path: 'input-groups',
            component: InputGroupComponent,
            data: {
              title: "Input Groups",
              breadcrumb: "Input Groups",
            }
          },
          {
            path: 'mega-options',
            component: MegaOptionsComponent,
            data: {
              title: "Mega Options",
              breadcrumb: "Mega Options",
            }
          },
          {
            path: 'input-mask',
            component: InputMaskComponent,
            data: {
              title: "Input Mask",
              breadcrumb: "Input Mask",
            }
          },
          {
            path: 'validation',
            component: FormsValidationComponent,
            data: {
              title: "Validation Form",
              breadcrumb: "Validation Form",
            }
          }
        ]
      }
];