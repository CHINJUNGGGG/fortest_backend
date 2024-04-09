import httpStatusCodes from 'http-status-codes';

// Interfaces
import IController from '../../interfaces/IController';
// import {
//   ICreateUser,
//   ILoginUser,
//   IUpdateUser,
//   IUserQueryParams,
// } from '../../interfaces/user.interface';
import { IDeleteById, IDetailById } from '../../interfaces/common.interface';
import { StringError } from '../../errors/string.error';
import postService from '../../services/post/post.service';
import ApiResponse from '../../utilities/api-response.utility';
import Encryption from '../../utilities/encryption.utility';
import constants from '../../constants';

const getPost: IController = async (req, res) => {
  try {
    const post = await postService.getPost();
    return ApiResponse.resultCase(res, post, httpStatusCodes.OK);
  } catch (e) {
    if (e instanceof StringError) {
      return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
    }
    return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, 'Something went wrong');
  }
};

export default {
  getPost,
};
