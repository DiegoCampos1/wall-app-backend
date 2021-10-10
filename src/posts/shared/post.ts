import { Document } from 'mongoose';

export class Message extends Document {
  text: string;
  author: string;
  authorId: string;
}

// 78D5PhoFJx1NQSak
