/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */

/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
export enum MovingDirection {
  /**
   * A forward step transition
   */
  Forwards,
  /**
   * A backward step transition
   */
  Backwards,
  /**
   * No step transition was done
   */
  Stay
}

export namespace MovingDirectionUtils {
  export type Predicate = ((direction: MovingDirection) => boolean) | ((direction: MovingDirection) => Promise<boolean>);

  export function calulate(currentIndex: number, destinationIndex: number): MovingDirection {
    if (destinationIndex > currentIndex) {
      return MovingDirection.Forwards;
    } else if (destinationIndex < currentIndex) {
      return MovingDirection.Backwards;
    }
    return MovingDirection.Stay;
  }
}
