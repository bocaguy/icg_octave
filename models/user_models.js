// load the things we need
var mongoose =  require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
 
// define the schema for our  user model
var userSchema =  mongoose.Schema(
    {
        email: String,
        hashed_password: String
    },
    {collection : 'users'}
);
 
// generating a hash
userSchema.methods.generateHash  = function(password)   
{
    return bcrypt.hashSync(password,  bcrypt.genSaltSync(8), null);
};
 
// checking if password is  valid
userSchema.methods.validPassword  = function(password) 
{
    return bcrypt.compareSync(password,  this.hashed_password);
};
 
// create the model for users  and expose it to our app
module.exports =  mongoose.model('User', userSchema);