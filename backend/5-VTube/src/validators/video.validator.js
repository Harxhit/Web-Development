import Joi from 'joi';

const videoPostSchema = Joi.object({
  videoFile: Joi.object({
    fieldname: Joi.string().required().valid('videoFile'),
    originalname: Joi.string().required(),
    mimetype: Joi.string()
      .valid('video/mp4', 'video/webm', 'video/ogg')
      .required(),
    size: Joi.number().max(100 * 1024 * 1024),
  }),
  title: Joi.string().required().max(255).label('title'),
  description: Joi.string().allow('').max(1000).label('description'),
});

function validateVideoPost(req) {
  console.log('Validator request', req.body);
  return videoPostSchema.validate(
    req.file
      ? {
          videoFile: {
            fieldname: 'video',
            originalname: req.files.video.name,
            mimetype: req.files.video.mimetype,
            size: req.files.video.size,
          },
          title: req.body.title,
          description: req.body.description,
        }
      : {
          title: req.body.title,
          description: req.body.description,
        },
    { abortEarly: false },
  ); // abortEarly: false to show all errors
}

export { validateVideoPost };
