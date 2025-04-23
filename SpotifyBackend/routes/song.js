const express = require('express');
const passport = require('passport');
const SongModel = require('../models/Song');
const UserModel = require('../models/User');
const router = express.Router();
router.use(express.json());

router.post('/create',passport.authenticate("jwt",{session:false}),async(req,res)=>{
 const {SongName,thumbnail,audio} = req.body;
 if(!SongName || !thumbnail || !audio){
  return res.status(400).json({msg:"All fields are required"})
 }

 const Artist = req.user._id;
 console.log(Artist);
 const songDetails={
    SongName,
    thumbnail,
    audio,
    Artist
 }
 const createdsong =await SongModel.create(songDetails);
  return res.status(200).json({msg:createdsong});
})

router.get('/get/mysong',passport.authenticate("jwt",{session:false}),async(req,res)=>{
    console.log(req.user);
      const songs = await SongModel.find({Artist:req.user._id});
      console.log(songs);
      return res.status(200).json(songs);
})
module.exports=router; 