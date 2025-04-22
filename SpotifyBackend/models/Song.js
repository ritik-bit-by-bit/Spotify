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
    ref:"User",
    required:true
}
})

const SongModel=mongoose.model("Songollection",Song);
module.exports=SongModel;


