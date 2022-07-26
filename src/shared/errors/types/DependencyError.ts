import { HttpStatus } from '@nestjs/common';
import { BaseError } from './BaseError';

export class DependencyError extends BaseError {
  constructor(
    name,
    statusCode = HttpStatus.BAD_REQUEST,
    description = 'Impossivel deletar entidades relacionadas no banco',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
