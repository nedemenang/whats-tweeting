import { Router } from 'express';
import tweetController from '../controllers/twitter';
import checkAuth from '../middleware/checkAuthentication';
import QueryValidator from '../middleware/queryValidator';


const router = Router();

router.get('/trends/:lat/:long', checkAuth, QueryValidator, tweetController.getTrends);

router.get('/:geocode/', checkAuth, QueryValidator , tweetController.searchTweets);

router.get('/users/:geocode/', checkAuth, QueryValidator, tweetController.searchUsers);

export default router;
