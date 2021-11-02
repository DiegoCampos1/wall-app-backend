import { UserResponse } from 'src/users/userResponse.entity';

export const userStub = (): UserResponse => {
  return {
    email: 'test.integration@test.com',
    name: 'Integration Test',
    id: '123456',
  };
};

// export class User extends Document {
//   name: string;
//   email: string;
//   password: string;
// }
