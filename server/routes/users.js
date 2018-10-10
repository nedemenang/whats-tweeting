import { Router } from 'express';
import UserController from '../controllers/user';
import checkAuth from '../middleware/checkAuthentication';
import Validator from '../middleware/validator';

const router = Router();

router.post('/', Validator, UserController.register);

router.post('/login', UserController.authenticate);

router.delete('/:userId', checkAuth, UserController.delete);

router.post('/reset', UserController.passwordReset);

router.get('/', checkAuth, UserController.list);

router.get('/:userId', checkAuth, UserController.userById);

export default router;
