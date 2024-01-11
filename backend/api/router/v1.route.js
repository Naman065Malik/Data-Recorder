const { Router } = require('express')
const { userRouter } = require('../modules/user/user.routes')
const v1 = Router()

v1.use('/v1', userRouter)

module.exports = { v1 }