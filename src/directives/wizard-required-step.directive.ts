import { Directive, forwardRef } from '@angular/core';

import { WizardRequiredStep } from '../util/wizard-required-step.interface';
import { WizardStep } from '../util/wizard-step.interface';

@Directive({
  selector: '[awWizardRequiredStep]',
  providers: [
    { provide: WizardStep, useExisting: forwardRef(() => WizardRequiredStepDirective) },
    { provide: WizardRequiredStep, useExisting: forwardRef(() => WizardRequiredStepDirective) }
  ],
})
export class WizardRequiredStepDirective extends WizardRequiredStep {
}
