import { NotFoundException } from '@nestjs/common';

export class PostNotFound extends NotFoundException {
  constructor(postId: string) {
    super(`Post not found for this id: ${postId}.`);
  }
}
