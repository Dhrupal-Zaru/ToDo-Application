const express = require('express');
const { getUsers, updateUser, deleteUser, signUp, login, getCurrentUser } = require('../controllers/userController');
const { auth } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/', auth, getUsers);
router.get('/user', auth, getCurrentUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;