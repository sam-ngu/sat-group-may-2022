const User = require('../models/User');

const router = require('express').Router();


router.get('/users', (req,res) => {

  // grab all the users

  User.find({})
    .populate("thoughts")
    .populate("friends")
    .then((users) => {

      res.json(users);
    });
});
console.log('aaaa', {router});

module.exports = router;