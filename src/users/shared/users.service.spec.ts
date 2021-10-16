import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/mail/user.entity';
import { MailService } from '../../mail/mail.service';
import { UsersController } from '../users.controller';
import { UsersService } from './users.service';

jest.mock('./users.service');
jest.mock('../../mail/mail.service.ts');

describe('UsersService', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let mailService: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailService],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    mailService = module.get<MailService>(MailService);
  });

  it('service should be defined', () => {
    expect(usersService).toBeDefined();
  });

  it('Controller should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('mailService should be defined', () => {
    expect(mailService).toBeDefined();
  });

  describe('getUser', () => {
    describe('when getUsers is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersController.getAll();
      });

      test('then it should call usersService', () => {
        expect(usersService.getAll).toBeCalledWith();
      });
    });
  });
});
