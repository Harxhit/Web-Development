import { Router } from 'express';
import healthCheck from '../controllers/healtCheck';

const router = Router();

router.route('/').get(healthCheck);

export default router;
