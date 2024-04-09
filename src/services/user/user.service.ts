import { getRepository } from 'typeorm';

import { User } from '../../entities/user/user.entity';

import Encryption from '../../utilities/encryption.utility';
import ApiUtility from '../../utilities/api.utility';

import {
  ICreateUser,
  ILoginUser,
} from '../../interfaces/user.interface';
import { IDetailById } from '../../interfaces/common.interface';


import { StringError } from '../../errors/string.error';

const where = { isDeleted: false };

const create = async (params: ICreateUser) => {
  const item = new User();
  item.email = params.email;
  item.password = await Encryption.generateHash(params.password, 10);
  const userData = await getRepository(User).save(item);
  return ApiUtility.sanitizeUser(userData);
};

const login = async (params: ILoginUser) => {
  const user = await getRepository(User)
    .createQueryBuilder('user')
    .where('user.email = :email', { email: params.email })
    .select([
      'user.createdAt',
      'user.updatedAt',
      'user.id',
      'user.email',
      'user.password',
    ])
    .getOne();

  if (!user) {
    throw new StringError('Your email has not been registered');
  }

  if (await Encryption.verifyHash(params.password, user.password)) {
    return ApiUtility.sanitizeUser(user);
  }

  throw new StringError('Your password is not correct');
};
const getById = async (params: IDetailById) => {
  try {
    const data = await getRepository(User).findOne({ id: params.id });
    return ApiUtility.sanitizeUser(data);
  } catch (e) {
    return null;
  }
};

const detail = async (params: IDetailById) => {
  const query = {
    where: { ...where, id: params.id },
  }

  const user = await getRepository(User).findOne(query);
  if (!user) {
    throw new StringError('User is not existed');
  }

  return ApiUtility.sanitizeUser(user);
}
export default {
  create,
  login,
  getById,
  detail
}
