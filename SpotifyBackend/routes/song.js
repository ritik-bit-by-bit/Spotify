const express = require('express');
const passport = require('passport');
const router = express.Router;

router.post('/create',passport.authenticate('user'),(req,res)=>{
 const {SongName,thumbnail,audio,Artist} = req.body;
 
})
module.exports=router;