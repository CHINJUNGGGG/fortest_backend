import joi from 'joi';

export default {
  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },
};
