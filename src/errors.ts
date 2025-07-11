/**
 * Base class for all application errors.
 */
export abstract class BaseError extends Error {
  /**
   * @param message - The error message to be displayed to the user.
   */
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name

    // This is needed to make instanceof work correctly
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

/**
 * Error thrown when a resource is not found.
 */
export class NotFoundError extends BaseError {}

/**
 * Error thrown when an invalid argument is provided.
 */
export class BadArgumentError extends BaseError {}

/**
 * Error thrown when an unexpected error occurs.
 */
export class RuntimeError extends BaseError {}
