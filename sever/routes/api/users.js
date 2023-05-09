const express = require('express');
const { createUser, getUserById } = require('../../controllers/userController');
const router = express.Router();

router.post('/createUser', createUser);
router.get('/:userId', getUserById);

module.exports = router;
