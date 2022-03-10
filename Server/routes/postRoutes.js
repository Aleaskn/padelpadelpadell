const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const axios = require('axios');

router.route("/").axios.get(postController).post(postController);




module.exports = router;