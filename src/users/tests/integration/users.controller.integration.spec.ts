import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { Connection } from 'mongoose';
import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { userStub } from '../stubs/user.stub';

describe('UsersControlller', () => {
  let dbConnection: Connection;
  let httpServer: any;
  let app: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef
      .get<DatabaseService>(DatabaseService)
      .getDbHandle();

    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await dbConnection.collection('users').deleteMany({});
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      await dbConnection.collection('User').insertOne(userStub());
      const response = await request(httpServer).get('/users');
      expect(response.status).toBe(200);
      //expect(response.body).toEqual([userStub()]);
    });
  });
});
