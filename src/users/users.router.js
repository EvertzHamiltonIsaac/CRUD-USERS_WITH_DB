const router = require('express').Router()
const users_services = require('./users.services')

router.get('/users', users_services.getAllUsers)
router.post('/users', users_services.postUser)

router.get('/users/:id', users_services.getUserById)
router.patch('/users/:id', users_services.patchUser)
router.delete('/users/:id', users_services.deleteUser)

module.exports = router