import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/users tests', () => {
    it('/users (GET)', () => {
      return request(app.getHttpServer()).get('/users').expect(200);
    });

    it('/users:id (GET NOTFOUND)', () => {
      return request(app.getHttpServer()).get('/users/1').expect(404);
    });

    it('/users (POST)', () => {
      return request(app.getHttpServer()).post('/users').expect(201);
    });
  });

  describe('/posts tests', () => {
    it('/posts (GET)', () => {
      return request(app.getHttpServer()).get('/posts').expect(200);
    });

    it('/posts:id (POST NOTFOUND)', () => {
      return request(app.getHttpServer()).get('/posts/1').expect(404);
    });

    it('/posts (POST Unauthorized)', () => {
      return request(app.getHttpServer()).post('/posts').expect(401);
    });
  });
});
