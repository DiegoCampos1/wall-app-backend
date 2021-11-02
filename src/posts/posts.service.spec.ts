import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostService } from './shared/post.service';

jest.mock('./shared/post.service');

describe('UsersService', () => {
  let postsController: PostsController;
  let postsService: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostService],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
    postsService = module.get<PostService>(PostService);
  });

  it('service should be defined', () => {
    expect(postsService).toBeDefined();
  });

  it('Controller should be defined', () => {
    expect(postsController).toBeDefined();
  });

  describe('getPosts', () => {
    describe('when getPosts is called', () => {
      beforeEach(async () => {
        await postsController.getAll();
      });

      test('then it should call usersService', () => {
        expect(postsService.getAll).toBeCalledWith();
      });
    });
  });

  describe('getPosts', () => {
    describe('when ById is called', () => {
      beforeEach(async () => {
        await postsController.getById('exampleTest');
      });

      test('then it should call usersService', () => {
        expect(postsService.getById).toBeCalledWith('exampleTest');
      });
    });
  });
});
