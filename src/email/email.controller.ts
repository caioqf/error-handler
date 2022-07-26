import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('/send')
  async sendEmail() {
    return await this.emailService.sendEmail({
      from: 'sender@server.com',
      to: 'caio.faria@realizati.com.br',
      subject: 'Message title',
      text: 'Plaintext version of the message',
      html: '<p>HTML version of the message</p>',
    });
  }
}
