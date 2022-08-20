const User = require('../../models/User');

const router = require('express').Router();

// contain the auth routes


// login page
router.get('/login', (req, res) => {


  res.render("login")

});

// post login (for user to login)
router.post('/login', async (req, res) => {

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).render('login', {
        error: "Email or password is invalid. Please try again"
      })
        
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .render('login', {
          error: "Email or password is invalid. Please try again"
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.redirect('/');
    });

  } catch (err) {
    res.status(400).render('login', {
      error: "Email or password is invalid. Please try again"
    });
  }


})

// signup page



// post (for user to actually signup)

module.exports = router;
