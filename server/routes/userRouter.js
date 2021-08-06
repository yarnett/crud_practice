const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', (req, res) => {
  res.status(200).send('Islands makes me sad');
});

router.post('/new', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
})

module.exports = router;