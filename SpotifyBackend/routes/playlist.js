const express = require ('express');
const router = express.Router;
const passport= require('passport');
const PlaylistModel= require('../models/playlist');
const SongModel = require('../models/Song');
router.post("/create", passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const {PlaylistName,thumbnail,songs,collaboraters} = req.body;
    
    if(!PlaylistName || !thumbnail || !songs || !owner){
        return res.status(400).json({msg:"All fields are required"})
    }
    const playlistDetails={
        PlaylistName,
        thumbnail,
        songs,
        owner:req.user._id,
        collaboraters
    }
    const createdPlaylist = await PlaylistModel.create(playlistDetails);
    return res.status(200).json({msg:createdPlaylist})

})
router.get('/get/playlist/:playlistId',passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const playlistId = req.params.playlistId;
    const playlists = await PlaylistModel.findOne({_id:playlistId});
    if(!playlists){
        return res.status(404).json({msg:"Playlist not found"})
    }
    return res.status(200).json(playlists);
})

router.get('/get/artist/:artistId',passport.Authenticator("jwt",{session:false}),async(req,res)=>{
    const artistId = req.params.artistId;
    if(!artistId){
        return res.status(400).json({msg:" artistId are required"})
    }
    const playlists = await PlaylistModel.find({owner:artistId});
    if(!playlists)
        return res.status(404).json({msg:"Playlist not found"})
    return res.status(200).json(playlists);
})
router.post("/add/song",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user;
    const {playlistId,songId} = req.body;
    const playlist = await PlaylistModel.findOne({_id:playlistId});
    if(!playlist){
        return res.status(404).json({msg:"Playlist not found"})
    }
    const song = await SongModel.findOne({_id:songId});
    if(!song){
        return res.status(404).json({msg:"Song not found"})
    }
    if(playlist.owner._id === currentUser._id ||playlist.collaboraters.includes(currentUser._id)){
        playlist.songs.push(songId);
        await playlist.save();
        return res.status(200).json({msg:`Song ${song.SongName}added to playlist ${playlist.PlaylistName}`})
        }
    else{
        return res.status(403).json({msg:"You are not authorized to add songs to this playlist"})
    }
})


module.exports=router;