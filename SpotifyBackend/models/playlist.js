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
    ttype:mongoose.Types.ObjectId,
    ref:"Song"
}],
owner:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:true
},
collaboraters:[{
    type:mongoose.Types.ObjectId,
    ref:"User"
}]
})

const PlaylistModel=mongoose.model("PlayListcollection",Playlist);
module.exports=PlaylistModel;


