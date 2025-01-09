import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceNotFoundException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Resource not found',
        message: message,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
