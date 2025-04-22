const express = require('express')
const app = express();
const port = 3000;
const passport=require('passport')
const User = require('./models/User');
const authRoutes=require('./routes/Auth')
const router = require('./routes/Auth');
// connecting to database
app.use(express.json());
app.use(passport.initialize());
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongoDB")
}).catch((err)=>{
    console.log(err)
});
// setup passport jwt
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisisRitik';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
console.log("DEBUG: Type of authRoutes:", typeof authRoutes);
console.log("DEBUG: Value of authRoutes:", authRoutes);
app.use("/auth",authRoutes);
app.get('/',(req,res)=>{
    res.send("hi there");
});

app.listen(3000,()=>{
console.log(`server is listening at http://localhost:${port}`)
});
