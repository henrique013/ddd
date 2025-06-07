/**
 * Base class for all application errors.
 */
export abstract class AppError extends Error {
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
export class NotFoundError extends AppError {}

/**
 * Error thrown when an unexpected error occurs.
 */
export class RuntimeError extends AppError {}
