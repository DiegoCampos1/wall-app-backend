import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team"', // override default from
      subject: 'Welcome to THE WALL App!',
      template: './welcome', // `.hbs` extension is appended automatically
      context: {
        name: user.name,
      },
    });
  }
}
