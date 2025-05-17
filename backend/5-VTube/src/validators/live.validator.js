import Joi from 'joi';

const liveValidator = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().required(),
  startTime: Joi.date().default(() => new Date()),
  endTime: Joi.date().allow(null),
  viewerCount: Joi.number().integer().min(0).required().default(0),
  chatEnabled: Joi.boolean().required(),
  status: Joi.string().valid('scheduled', 'live', 'ended').required(),
});

export default liveValidator;
