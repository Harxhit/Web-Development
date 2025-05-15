// video.validator.js
import Joi from 'joi';

const updateVideoValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
export default updateVideoValidator;
