import { getRepository } from 'typeorm';
import { Post } from '../../entities/post/post.entity';

import Encryption from '../../utilities/encryption.utility';
import ApiUtility from '../../utilities/api.utility';
import DateTimeUtility from '../../utilities/date-time.utility';

import {
  IUserQueryParams,
} from '../../interfaces/user.interface';

// import { IDeleteById, IDetailById } from '../../interfaces/common.interface';

import { StringError } from '../../errors/string.error';

const getPost = async (params?: IUserQueryParams) => {
    let data = await getRepository(Post).createQueryBuilder('post');
    const post = await data.getMany();
    const response = [];
    if (post && post.length) {
      for (const item of post) {
        response.push(ApiUtility.sanitizePost(item));
      }
    }
    return { response };
};


export default {
    getPost,
}
