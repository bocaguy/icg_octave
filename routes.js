module.exports = function(app,  passport) 
{
        // show the home page (will also have our login  links)
        app.get('/', function(req, res) 
        {
            res.render('home.ejs');
        });

        // PROFILE SECTION
        app.get('/profile', isLoggedIn, function(req, res)  
        {
            res.render('user_profile.ejs', 
            {
                user : req.user
            });
        });
 
        // LOGOUT
        app.get('/logout', function(req, res) 
        {
            req.logout();
            res.redirect('/');
        });
 
//-----------------Authenticate  login-----------
        // show the login form
        app.get('/login', function(req,  res) 
        {
            res.render('user_login.ejs',  { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login',  passport.authenticate('local-login', 
        {
            successRedirect :  '/profile', // redirect to the secure profile section
            failureRedirect :  '/login', // redirect back to the signup page if there is an error
            failureFlash : true  // allow flash messages
        }));
 
//----------------User  Registration------
        // show the signup form
        app.get('/register', function(req,  res) {
            res.render('user_registration.ejs',  { message: req.flash('loginMessage') });
        });

        // process the signup form
        app.post('/register',  passport.authenticate('local-signup', {
            successRedirect :  '/profile', // redirect to the secure profile section
            failureRedirect :  '/register', // redirect back to the signup page if there is an error
            failureFlash : true  // allow flash messages
        }));
 

//---------------Authorizing  already logining
        app.get('/connect/local',  function(req, res) {
                    res.render('connect-local.ejs',  { message: req.flash('loginMessage') });
        });
        app.post('/connect/local',  passport.authenticate('local-signup', {
            successRedirect :  '/profile', // redirect to the secure profile section
            failureRedirect :  '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true  // allow flash messages
        }));
//---------------Unlink Account (remove email and password)
    app.get('/unlink/local', function(req, res) 
    {
        var user = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) 
        {
            if (err) throw err;
             res.redirect('/profile');
        });
    });
};
 
// route middleware to ensure  user is logged in
function isLoggedIn(req, res,  next) 
{
    if (req.isAuthenticated())
        return next();
        res.redirect('/');
}
