import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { Connection } from 'mongoose';
import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';

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
    await dbConnection.collection('User').deleteMany({});
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      await dbConnection.collection('User').insertOne({
        name: 'Coragem the Cat 4',
        email: 'teste4@test.com',
        password: 'senha123',
      });
      const response = await request(httpServer).get('/users');
      expect(response.status).toBe(200);
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const createUserRequest: any = {
        name: 'Coragem the Cat 4',
        email: 'teste4@test.com',
        password: 'senha123',
      };

      const response = await request(httpServer)
        .post('/users')
        .send(createUserRequest);

      expect(response.status).toBe(201);
    });
  });
});
