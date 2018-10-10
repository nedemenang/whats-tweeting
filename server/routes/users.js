import { Router } from 'express';
import UserController from '../controllers/user';
import checkAuth from '../middleware/checkAuthentication';

const router = Router();

router.post('/', UserController.register);

router.post('/login', UserController.authenticate);

router.delete('/:userId', checkAuth, UserController.delete);

router.post('/reset', UserController.passwordReset);

router.get('/', checkAuth, UserController.list);

export default router;
