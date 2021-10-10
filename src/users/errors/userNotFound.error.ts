import { NotFoundException } from '@nestjs/common';

export class UserNotFound extends NotFoundException {
  constructor(postId: string) {
    super(`User not found for this id: ${postId}.`);
  }
}
