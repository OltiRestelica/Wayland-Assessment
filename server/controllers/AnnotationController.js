const Annotation = require("../models/Annotation");
const Video = require("../models/Video");

const addAnnotation = (req, res) => {
  const { video_id } = req.params;
  const { timestamp, description } = req.body;

  if (timestamp === undefined || !description) {
    return res.status(400).json({
      status: 0,
      message: "Timestamp and description are required",
    });
  }

  return Annotation.create({
    video_id,
    user_id: req.user.user_id,
    timestamp,
    description,
  })
    .then((annotation) => {
      res.status(201).json({
        status: 1,
        data: annotation,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        data: err.message,
      });
    });
};

module.exports = { addAnnotation };
