require('dotenv').config();
const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require("express-session"),
    massive = require('massive'),
    passport = require('passport'),
    Auth0strategy = require('passport-auth0')

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// need to create a heroku account for a postgresSQL database or MYSQL
// massive(process.env.DB_CONNECTION).then(db => {
//     app.set('db', db);
// })

passport.use(new Auth0strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    console.log(profile)
    db.find_user([profile.identities[0].user_id]).then(user => {
        if(user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile.json;
            db.create_user([user.name, user.email, user.picture, user.identities[0].user_id])
            .then(user => {
                return done(null, user[0].id)
            })
        }
    })
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}));

app.get('/auth/user', (req, res) => {
    if(!req.user) {
        return res.status(200).send(false)
    }
    return res.status(200).send(req.user);
});

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, process.env.SUCCESS_REDIRECT)
})

passport.serializeUser((id, done) => {
    done(null, id);
});

passport.deserializeUser((id, done) => {
    app.get('db').find_current_user([id])
    .then(user => {
        done(null, user[0]);
    })
});

app.listen(process.env.PORT, ()=> console.log(`Running on port ${process.env.PORT}`));