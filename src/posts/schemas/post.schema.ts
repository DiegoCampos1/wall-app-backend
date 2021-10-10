import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  text: String,
  author: String,
  authorId: String,
});
