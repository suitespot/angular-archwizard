import { Component, forwardRef, ViewEncapsulation } from '@angular/core';

import { WizardRequiredStep } from '../../util/wizard-required-step.interface';
import { WizardStep } from '../../util/wizard-step.interface';

@Component({
  selector: 'aw-wizard-required-step',
  templateUrl: './wizard-required-step.component.html',
  styleUrls: ['./wizard-required-step.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: WizardStep, useExisting: forwardRef(() => WizardRequiredStepComponent) },
    { provide: WizardRequiredStep, useExisting: forwardRef(() => WizardRequiredStepComponent) }
  ]
})
export class WizardRequiredStepComponent extends WizardRequiredStep {
}
