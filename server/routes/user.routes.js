const router = require('express').Router()
const { register, getUsers, getOneUser, update, deleteUser } = require('../controllers/userController')

router.post('/register', register)
router.get('/list', getUsers)
router.get('/list/id/:id', getOneUser)
router.patch('/set/:id', update)
router.delete('/remove/id/:id', deleteUser)

module.exports = router