  const express=require('express')
const router=express.Router();
const {register,login}=require('../controllers/Autcontrollers');
const {checker,validate}=require("../middleware/userValidation")
router.post('/register',register)
router.post('/login',login)
module.exports=router
