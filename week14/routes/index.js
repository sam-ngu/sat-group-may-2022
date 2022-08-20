const router = require('express').Router();

const auth = require('./web/auth');
const blog = require('./web/blog');

router.use(auth);
router.use(blog);

module.exports = router;
