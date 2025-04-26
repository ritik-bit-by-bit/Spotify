const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
router.use(express.json());
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const getToken = require('../helper.js/getToken')

// this POST route will help to register new user
router.post('/register',async(req,res)=>{
  const {email,firstName, lastName,password,username}=req.body;
  const user=await User.findOne({email});
  if(user){
    res.status(404).json({msg:"User Already existed"})
  }
  else{
    const hashPassword=await bcrypt.hash(password,10);
   const newUser = await User.create({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:hashPassword,
        username:username
    })
    console.log("User Created");
    const token = await getToken(email,newUser);
    const userToReturn={...newUser.toJSON(),token};
    delete userToReturn.password;
   return res.status(200).json(userToReturn);
}
});

router.post('/login',async(req,res)=>{
  const{email,password}=req.body;
  const user=await User.findOne({email});
  if(!user){
    res.status(403).json({msg:"Invalid Credentials"})
  }
  else{
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
      res.status(403).json({msg:"Invalid Credentials"})
    }
    else{
      const token = await getToken(user.email,user);
      const userToReturn={...user.toJSON(),token,"msg":"Login Successful"};
      delete userToReturn.password;
      return res.status(200).json(userToReturn);
    }
  }
    
})

module.exports =router;