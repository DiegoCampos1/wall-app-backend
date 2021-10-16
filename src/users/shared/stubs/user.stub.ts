import { UserResponse } from 'src/users/userResponse.entity';

export const userStub = (): UserResponse => {
  return {
    id: '123',
    email: 'test@example.com',
    name: 'test',
  };
};
