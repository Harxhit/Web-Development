import sgMail from '@sendgrid/mail';
import logger from '../utils/logger.util.js';
import ApiError from './apiError.util.js';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async ({ to, templateId, dynamicTemplateData }) => {
  const message = {
    to,
    from: 'harxhit13@gmail.com',
    templateId,
    dynamic_template_data: dynamicTemplateData,
  };

  try {
    await sgMail.send(message);
    logger.info('Email sent', message);
  } catch (error) {
    logger.error('Error sending mail', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(500, 'Error sending mail');
  }
};

export default sendMail;
