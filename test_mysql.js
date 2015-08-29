var models  = require('./models');

models.breaches.findById(2).then(function(breach) 
{
  if (breach == null) 
  {
    console.log("Breach Not Found");
  }
  else {
    console.log(breach.dataValues.title);
  }
});

models.users.findAll().then(function(users) {
  console.log(users)
})