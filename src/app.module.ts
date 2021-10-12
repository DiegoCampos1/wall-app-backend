import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://db_user:78D5PhoFJx1NQSak@cluster0.d8pxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    MailModule,
  ],
})
export class AppModule {}
