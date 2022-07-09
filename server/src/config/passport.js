const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const config = require('.');
const User = require('../models/user.model');

const JWToptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(JWToptions, async (paylaod, done) => {
        try {
            const user = await User.findById(paylaod.userId).select("-password");
            if (!user) {
                done(null, false);
            }
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    })
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
  });
};