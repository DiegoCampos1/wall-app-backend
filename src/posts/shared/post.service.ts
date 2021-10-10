import { Injectable } from '@nestjs/common';
import { Message } from './post';

@Injectable()
export class PostService {
  posts: Message[] = [
    { id: 1, text: 'Post 1', author: 'Diego', authorId: 1 },
    { id: 2, text: 'Post 2', author: 'Josiane', authorId: 2 },
  ];

  getAll() {
    return this.posts;
  }

  getById(id: number) {
    const post = this.posts.find((post) => post.id == id);
    return post;
  }

  create(message: Message) {
    let lastId = 0;
    if (this.posts.length > 0) {
      lastId = this.posts[this.posts.length - 1].id;
    }
    message.id = lastId + 1;
    this.posts.push(message);
    return message;
  }

  update(post: Message) {
    const postArray = this.getById(post.id);
    if (postArray) {
      postArray.text = post.text;
      postArray.author = post.author;
    }
    // TODO: error
    return postArray;
  }

  delete(id: number) {
    const index = this.posts.findIndex((post) => post.id == id);
    this.posts.splice(index, 1);
    // TODO: error
  }
}
