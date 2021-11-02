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
    await dbConnection.collection('Post').deleteMany({});
  });

  describe('getPosts', () => {
    it('should return an array of Posts', async () => {
      await dbConnection.collection('Post').insertOne({
        text: 'Coragem the Cat 4',
        author: 'teste4@test.com',
        authorId: 'senha123',
      });
      const response = await request(httpServer).get('/posts');
      expect(response.status).toBe(200);
    });
  });
});
