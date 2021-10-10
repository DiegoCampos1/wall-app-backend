import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './shared/post';
import { PostService } from './shared/post.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll(): Promise<Message[]> {
    return this.postService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Message> {
    return this.postService.getById(id);
  }

  // TODO: Only users
  @Post()
  async create(@Body() message: Message): Promise<Message> {
    return this.postService.create(message);
  }

  // TODO: Only owner post
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() message: Message,
  ): Promise<Message> {
    message.id = id;
    return this.postService.update(id, message);
  }

  // TODO: Only admin
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
