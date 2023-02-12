import express from 'express';

import {
    addVideo,
    getVideo,
    deleteVideo,
    addView,
    trend,
    random,
    subscribed,
    getByTag,
    search
} from '../controllers/video.js';
import {verifyToken} from '../verifyToken.js';

const router = express.Router();

//create a video
router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, addVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/subscribe', verifyToken, subscribed);
router.get('/tags', getByTag);
router.get('/search', search);

export default router;