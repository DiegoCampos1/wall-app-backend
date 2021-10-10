import { BadRequestException } from '@nestjs/common';

export class UserNotCreate extends BadRequestException {
  constructor() {
    super(`User not create, please check body and try again`);
  }
}
