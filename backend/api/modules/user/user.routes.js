const { Router } = require('express');
const { userController } = require('../../controllers/userControllers');
const userRouter = Router()

userRouter.get("/users", userController.getAllUsers);
userRouter.post("/user/update/:id", userController.updateUserInfo);
userRouter.post("/users", userController.insertAndUser);
userRouter.delete("/user/:id", userController.deleteUser);

module.exports = { userRouter }
