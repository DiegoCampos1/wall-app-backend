import { UserResponse } from 'src/users/userResponse.entity';

export const userStub = (): UserResponse => {
  return {
    id: '6181617b48789ceb3152f4df',
    name: 'Coragem the Cat 4',
    email: 'teste4@test.com',
  };
};

// export class User extends Document {
//   name: string;
//   email: string;
//   password: string;
// }
