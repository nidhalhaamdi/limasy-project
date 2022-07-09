const express = require('express');
const { 
  signIn, 
  signUp, 
  forgotPassword, 
  resetPassword, 
  getAuthUser
} = require ('./user.controller');

const { 
  loginRules, 
  registerRules, 
  validator 
} = require('../../middlewares/validator');

const { auth } = require('../../middlewares/auth');

const userRouter = express.Router();

userRouter.post("/signup", registerRules(), validator, signUp);

userRouter.post("/signin", loginRules(), validator, signIn);

userRouter.get("/profile", auth, getAuthUser);

userRouter.post("/forgotpassword", forgotPassword);

userRouter.post("/resetpassword/:resetToken", resetPassword);

module.exports = userRouter;