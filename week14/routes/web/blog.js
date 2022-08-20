const Blog = require('../../models/Blog');

const router = require('express').Router();

// GET homepage 

router.get('/', async (req, res) => {


  const blogs = await Blog.findAll();

  const results = blogs.map((blog) => blog.get({plain: true}));

  res.render('home', {
    blogs: results,
  });

});

// show a list of blogs



// GET specific blog

// POST comment



// GET specific comment??

module.exports = router

