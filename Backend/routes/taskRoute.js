const express = require('express');
const { auth } = require('../middlewares/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/create', auth, createTask)
router.get('/get', auth, getTasks)
router.put('/update/:id', auth, updateTask)
router.delete('/delete/:id', auth, deleteTask)

module.exports = router;