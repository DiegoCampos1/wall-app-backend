import { Injectable } from '@nestjs/common';
import { Message } from './post';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostNotFound } from '../errors/postNotFound.error';
import { PostNotCreate } from '../errors/postNotCreate.error';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Message>,
  ) {}

  async getAll() {
    return await this.postModel.find().exec();
  }

  async getById(id: string) {
    try {
      const post = await this.postModel.findById(id).exec();
      return post;
    } catch (eror) {
      throw new PostNotFound(id);
    }
  }

  async create(message: Message) {
    try {
      const createdPost = new this.postModel(message);
      return await createdPost.save();
    } catch (error) {
      throw new PostNotCreate();
    }
  }

  async update(id: string, post: Message) {
    try {
      await this.postModel.updateOne({ _id: id }, post).exec();
      return this.getById(id);
    } catch (error) {
      throw new PostNotFound(id);
    }
  }

  async delete(id: string) {
    return await this.postModel.deleteOne({ _id: id }).exec();
  }
}
