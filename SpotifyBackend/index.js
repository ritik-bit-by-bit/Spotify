// c:\Users\jaira\OneDrive\Desktop\SpotifyClone\SpotifyBackend\index.js

const express = require('express');
const app = express();
const port = 3000;
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require('./routes/Auth');
const songRoutes = require('./routes/song');
// const router = require('./routes/Auth'); // This line seems redundant as authRoutes is already imported and used

// connecting to database
app.use(express.json());
app.use(passport.initialize());
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log(err);
});

// setup passport jwt
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisisRitik'; // Consider moving this secret to environment variables for security

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    console.log("--- JWT Strategy Triggered ---"); // Log entry
    console.log("Received Payload:", jwt_payload); // Log the payload received
    try {
        // Ensure you are querying by the correct field (_id)
        console.log(`Attempting to find user with ID: ${jwt_payload.identifier}`); // Log the ID being searched
        const user = await User.findById(jwt_payload.identifier);

        if (user) {
            console.log("User found:", user._id); // Log success
            return done(null, user);
        } else {
            console.log("User NOT found with ID:", jwt_payload.sub); // Log failure
            return done(null, false);
        }
    } catch (err) {
        console.error("Error during User.findById in JWT Strategy:", err); // Log any DB errors
        return done(err, false);
    }
}));


console.log("DEBUG: Type of authRoutes:", typeof authRoutes);
console.log("DEBUG: Value of authRoutes:", authRoutes);
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.get('/', (req, res) => {
    res.send("hi there");
});

app.listen(port, () => { // Use the port variable
    console.log(`server is listening at http://localhost:${port}`);
});
