const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ritikroshanyadav9696:rascal1234@cluster0.lokbk.mongodb.net/");
const User =new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:false
},
email:{
    type:String,
    required:true
},
username:{
    type:String,
    require:true
},
LikeSongs:{
    type:Array,
    required:false
},
likedPlaylist:{
    type:Array,
    required:false
},
SubscribedArtist:{
    type:Array,
    required:false
},
password:{
    type:String,
    required:true
}
})

const UserModel=mongoose.model("UserCollection",User);
module.exports=UserModel;


