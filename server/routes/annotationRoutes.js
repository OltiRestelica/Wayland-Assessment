const express = require("express"); 
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

const {addAnnotation} = require("../controllers/AnnotationController");

router.post("/:video_id/addAnnotation", authMiddleware, addAnnotation);

module.exports = router;