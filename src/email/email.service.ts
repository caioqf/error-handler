import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { IEmailOptions } from './interfaces/IEmailOptions';

@Injectable()
export class EmailService {
  constructor(private readonly nodemailer: MailerService) {}

  async sendEmail(config: IEmailOptions) {
    await this.nodemailer
      .sendMail({
        from: config.from,
        to: config.to,
        subject: config.subject,
        text: config.text,
        html: config.html,
      })
      .catch((error) => {});
  }
}
