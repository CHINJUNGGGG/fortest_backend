import bcrypt from 'bcrypt';

export const userSeed = [
  {
    email: 'fortest@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
];
