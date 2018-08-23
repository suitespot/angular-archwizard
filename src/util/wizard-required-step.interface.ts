import { EventEmitter } from '@angular/core';

import { MovingDirection, MovingDirectionUtils } from './moving-direction.enum';
import { WizardStep } from './wizard-step.interface';

/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Will Fairclough
 */
export abstract class WizardRequiredStep extends WizardStep {
  /**
   * @inheritDoc
   */
  public stepExit = new EventEmitter<MovingDirection>();

  /**
   * @inheritDoc
   */
  public canExit: MovingDirectionUtils.Predicate | boolean = (dir) => dir !== MovingDirection.Forwards;

  /**
   * @inheritDoc
   */
  public enter(direction: MovingDirection): void {
    // this.completed = true;
    this.stepEnter.emit(direction);
  }

  /**
   * @inheritDoc
   */
  public exit(direction: MovingDirection): void {
    // set this completion step as incomplete
    // this.completed = false;
    this.stepExit.emit(direction);
  }
}
