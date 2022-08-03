const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.delete('/deleteuser', userController.deleteUser, (req, res) => res.status(200).json('user deleted'));

router.patch('/editUser', userController.updateUser, (req, res) => res.status(200).json(res.locals.updatedUsers));

module.exports = router;