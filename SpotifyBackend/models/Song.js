
const mongoose = require('mongoose');
const Song =new mongoose.Schema({
SongName:{
    type:String,
    required:true
},
thumbnail:{
type:String,
required:true
},
audio:{
    type:String,
    required:true
},
Artist:{
    type:mongoose.Types.ObjectId,
    ref:"UserCollection",
    required:false
}
})

const SongModel=mongoose.model("Songcollection",Song);
module.exports=SongModel;


