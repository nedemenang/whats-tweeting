import { Router } from 'express';
import tweetController from '../controllers/twitter';
import checkAuth from '../middleware/checkAuthentication';
import Validator from '../middleware/validator';
import QueryValidator from '../middleware/queryValidator';


const router = Router();

router.get('/trends/:lat/:long', checkAuth, QueryValidator, tweetController.getTrends);

router.get('/:geocode/:q', checkAuth, QueryValidator , tweetController.searchTweets);

router.get('/users/:geocode/:q', checkAuth, QueryValidator, tweetController.searchUsers);

export default router;
