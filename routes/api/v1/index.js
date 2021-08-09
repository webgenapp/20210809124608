const express = require('express')
const router = express.Router()

const icecreamsRouter = require('./icecreams')
router.use('/icecreams', icecreamsRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
