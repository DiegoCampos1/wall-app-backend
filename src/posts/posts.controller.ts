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
  async getById(@Param('id') id: number): Promise<Message> {
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
    @Param('id') id: number,
    @Body() message: Message,
  ): Promise<Message> {
    message.id = id;
    return this.postService.update(message);
  }

  // TODO: Only admin
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.postService.delete(id);
  }

}
