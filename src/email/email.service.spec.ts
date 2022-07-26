import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';

const sendMailMock = jest.fn();

jest.mock('nodemailer');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');
nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {});
});
