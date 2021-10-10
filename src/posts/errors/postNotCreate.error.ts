import { BadRequestException } from '@nestjs/common';

export class PostNotCreate extends BadRequestException {
  constructor() {
    super(`Post not create, please check body try again`);
  }
}
