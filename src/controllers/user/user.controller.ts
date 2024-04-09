import httpStatusCodes from 'http-status-codes';
import IController from '../../interfaces/IController';
import {
  ILoginUser,
} from '../../interfaces/user.interface';
import { IDetailById } from '../../interfaces/common.interface';
import { StringError } from '../../errors/string.error';
import userService from '../../services/user/user.service';
import ApiResponse from '../../utilities/api-response.utility';
import Encryption from '../../utilities/encryption.utility';
import constants from '../../constants';

const login: IController = async (req, res) => {
  try {
    const params: ILoginUser = {
      email: req.body.email,
      password: req.body.password,
    }
    const user = await userService.login(params);
    const cookie = await generateUserCookie(user.id);
    const token = cookie
    return ApiResponse.result(res, user, token.value, httpStatusCodes.OK, cookie);
  } catch (e) {
    if (e instanceof StringError) {
      return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
    }
    return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, 'Something went wrong');
  }
};

const detail: IController = async (req, res) => {
  try {
    const params: IDetailById = {
      id: parseInt(req.params.id, 10),
    }
    const data = await userService.detail(params);
    return ApiResponse.result(res, data, '', httpStatusCodes.OK);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const generateUserCookie = async (userId: number) => {
  return {
    key: constants.COOKIE.COOKIE_USER,
    value: await Encryption.generateCookie(constants.COOKIE.KEY_USER_ID, userId.toString()),
  };
};

export default {
  login,
  detail,
};
