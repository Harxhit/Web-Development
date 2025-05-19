import Joi from 'joi';

const VideoadValidator = Joi.object({
  title: Joi.string().max(100).required().trim(),
  duration: Joi.number().required(),
  advertiser: Joi.string().required().trim(),
  targetDemographics: Joi.object({
    ageGroup: Joi.string().required().trim(),
  }).required(),
});

export default VideoadValidator;
