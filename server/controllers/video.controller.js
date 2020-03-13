const Video = require('../models/video.model');

const getVideos = (req, res) => {
  Video.find().exec((err, videos) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Videos fetched successfully',
      videos,
    });
  });
};

const addVideo = (req, res) => {
  const newVideo = new Video(req.body);
  newVideo.save((err, video) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Video added successfully',
      video,
    });
  });
};

const updateVideo = (req, res) => {
  Video.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, video) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error', error: err });
      }
      return res.json({
        success: true,
        message: 'Updated successfully',
        video,
      });
    },
  );
};

const getVideo = (req, res) => {
  Video.find({ _id: req.params.id }).exec((err, video) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    if (video.length) {
      return res.json({
        success: true,
        message: 'Video fetched by id successfully',
        video,
      });
    }
    return res.json({
      success: false,
      message: 'Video with the given id not found',
    });
  });
};

const getVideosByAgent = (req, res) => {
  Video.find({ agent_id: req.params.agent_id }).exec((err, videos) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    if (videos.length) {
      return res.json({
        success: true,
        message: 'Video fetched by id successfully',
        videos,
      });
    }
    return res.json({
      success: false,
      message: 'Video with the given id not found',
    });
  });
};

const deleteVideo = (req, res) => {
  Video.findByIdAndRemove(req.params.id, (err, video) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: `${video.video_id} deleted successfully`,
    });
  });
};

module.exports = {
  getVideos,
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  getVideosByAgent,
};
