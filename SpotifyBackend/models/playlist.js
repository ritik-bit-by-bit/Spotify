const mongoose = require('mongoose');

const Playlist =new mongoose.Schema({
PlaylistName:{
    type:String,
    required:true
},
thumbnail:{
type:String,
required:true
},
songs:[{
    type:mongoose.Types.ObjectId,
    ref:"Songcollection"
}],
owner:{
    type:mongoose.Types.ObjectId,
    ref:"UserCollection",
    required:true
},
collaboraters:[{
    type:mongoose.Types.ObjectId,
    ref:"UserCollection"
}]
})

const PlaylistModel=mongoose.model("PlayListcollection",Playlist);
module.exports=PlaylistModel;


