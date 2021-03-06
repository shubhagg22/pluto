const express = require('express');
const router = express.Router();

// For all routes: `/auth/<>`
router.use('/auth', require('./auth/'));

// For all routes: `/user/<>`
router.use('/user', require('./user/'));

// For all routes: `/project/<>`
router.use('/project', require('./project/'));

// For all routes: `/comment/<>`
router.use('/comment', require('./comment/'));

// For all routes: `/like/<>`
router.use('/like', require('./like/'));

// For all routes: `/search/<>`
router.use('/search', require('./search/'));

// For all routes: `/agg/<>`
router.use('/agg', require('./agg/'));

module.exports = router;