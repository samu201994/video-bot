const express = require('express');
const videoController = require('../controllers/video.controller');

const router = express();
router.get('/videos', videoController.getVideos);
router.get('/agent/:agent_id/videos', videoController.getVideosByAgent);

router.post('/video', videoController.addVideo);

router.get('/video/:id', videoController.getVideo);
router.put('/video/:id', videoController.updateVideo);
router.delete('/video/:id', videoController.deleteVideo);

module.exports = router;
