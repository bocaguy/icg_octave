// postgres://wgaaiuzvguiyjo:ToCGevR_eJI7NbGgSTATANfpfI@ec2-107-21-125-143.compute-1.amazonaws.com:5432/d8klbt5nu3elma

var Sequelize = require('sequelize');
var bcrypt   = require('bcrypt-nodejs');
    var seq = new Sequelize('postgres://wgaaiuzvguiyjo:ToCGevR_eJI7NbGgSTATANfpfI@ec2-107-21-125-143.compute-1.amazonaws.com:5432/b');

/*
var seq = new Sequelize('d8klbt5nu3elma', 'wgaaiuzvguiyjo', 'ToCGevR_eJI7NbGgSTATANfpfI', {
  host: 'ec2-107-21-125-143.compute-1.amazonaws.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
*/

var User = seq.define('users', 
{
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING
}, 
{
    instanceMethods: 
    {
        comparePassword : function(candidatePassword, cb) 
        {
            bcrypt.compare(candidatePassword, this.getDataValue('password'), function(err, isMatch) 
            {
                if(err) return cb(err);
                cb(null, isMatch);
            });
        },
        hashPassword : function(cb) 
        {
          this.setDataValue('password',bcrypt.hashSync(this.getDataValue('password'),  bcrypt.genSaltSync(8), null));
        }
    }
})

console.log(User.build({ email: 'test@google.com', password: 'junkjunk' }).hashPassword());

module.exports = { 
    'DBpostgreSQL': 'seq',
    'User' : 'User'
};