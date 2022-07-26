import pino from 'pino';
import { BaseError } from './types/BaseError';

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

async function logError(error: any) {
  logger.error(error);
}

async function logErrorMiddleware(error: any, req, res, next) {
  logger.error(error);
  next(error);
}

async function returnError(error, req, res, next) {
  res.status((error.statusCode || 500).send(error.message));
}

async function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

export default {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
};
