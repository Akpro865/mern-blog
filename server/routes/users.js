const express = require('express')
const router = express.Router()
const { updateUser, deleteUser, getUser } = require('../controllers/users')
const { verify } = require('../middleware/auth')

router.put('/:id', verify, updateUser)
router.delete('/:id', verify, deleteUser)
router.get('/find/:id', getUser)

module.exports = router