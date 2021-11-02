import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() message: Message): Promise<Message> {
    return this.postService.create(message);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() message: Message,
  ): Promise<Message> {
    message.id = id;
    return this.postService.update(id, message);
  }

  // TODO: Only admin
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
