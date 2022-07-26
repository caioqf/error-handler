export class BaseError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(name, statusCode, isOperational, description) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}
