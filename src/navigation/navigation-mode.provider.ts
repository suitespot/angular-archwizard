import { FreeNavigationMode } from './free-navigation-mode';
import { NavigationMode } from './navigation-mode.interface';
import { SemiStrictNavigationMode } from './semi-strict-navigation-mode';
import { StepByStepNavigationMode } from './step-by-step-navigation-mode';
import { StrictNavigationMode } from './strict-navigation-mode';
import { WizardState } from './wizard-state.model';

/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param navigationMode The name of the to be used navigation mode
 * @param wizardState The wizard state of the wizard
 * @returns The created [[NavigationMode]]
 */
export function navigationModeFactory(navigationMode: string, wizardState: WizardState): NavigationMode {
  switch (navigationMode) {
    case 'free':
      return new FreeNavigationMode(wizardState);
    case 'semi-strict':
      return new SemiStrictNavigationMode(wizardState);
    case 'step-by-step':
      return new StepByStepNavigationMode(wizardState);
    case 'strict':
    default:
      return new StrictNavigationMode(wizardState);
  }
};
