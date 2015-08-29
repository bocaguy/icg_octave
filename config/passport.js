// load all modules
var LocalStrategy    = require('passport-local').Strategy;

// load up the user model
var User =  require('../models/user_models'); 

module.exports =  function(passport) 
{
 
//  PASSPORT SESSION SIGNUP  ==================================================

    /*required for persistent login sessions
     passport needs ability to serialize and  unserialize users out of session
     used to serialize the user for the session*/
     
    passport.serializeUser(function(user,  done) {
        done(null, user.id);
    });
 
    // used to deserialize the user
    passport.deserializeUser(function(id, done)  {
        User.findById(id, function(err, user)  {
            done(err, user);
        });
    });
 
//  LOCAL LOGIN  =============================================================

    // by default, local strategy uses  username and password, we will override with email
    
    passport.use('local-login', new  LocalStrategy(
    {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us  to pass in the req from our route (lets us check if a user is logged in or  not)
    },
    function(req, email, password, done) {
 
        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'email'  :  email }, function(err, user) {
                // if there are any errors,  return the error
                if (err)
                    return done(err);
 
                // if no user is found,  return the message
                if (!user)
                    return done(null, false,  req.flash('loginMessage', 'No user found.'));
 
                if  (!user.validPassword(password))
                    return done(null, false,  req.flash('loginMessage', 'Oops! Wrong password.'));
 
                // all is well, return user
                else
                    return done(null, user);
            });
        });
 
    }));
 
//  LOCAL SIGNUP  ============================================================

        // by default, local strategy uses  username and password, we will override with email

    passport.use('local-signup', new  LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us  to pass in the req from our route (lets us check if a user is logged in or  not)
    },
    function(req, email, password, done) {
 
        // asynchronous
        process.nextTick(function() {
 
            //  Whether we're signing up or connecting an  account, we'll need
            //  to know if the email address is in use.
            User.findOne({'email':  email}, function(err, existingUser) {
 
                // if there are any errors,  return the error
                if (err)
                    return done(err);
 
                // check to see if there's  already a user with that email
                if (existingUser) 
                    return done(null, false,  req.flash('signupMessage', 'That email is already taken.'));
 
                //    If we're logged in, we're connecting a new local account.
                if(req.user) {
                    var user = req.user;
                    user.email  = email;
                    user.hashed_password =  user.generateHash(password);
                    user.save(function(err) {
                        if (err)
                            throw err;
                        return done(null,  user);
                    });
                } 
                //  We're not logged in, so we're creating a  brand new user.
                else {
                    // create the user
                    var newUser  = new User();
                    
                    newUser.email = email;
                    newUser.hashed_password =  newUser.generateHash(password);

                      newUser.save(function(err) {
                        if (err)
                            throw err;
 
                        return done(null,  newUser);
                    });
                }
 
            });
        });
 
    }));

};