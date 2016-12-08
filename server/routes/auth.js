var express = require('express');
var router = express.Router();
var pug = require('pug');
var {readFileSync} = require('fs');
var debug = require('debug')('promt:server');

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var {User} = require('../model');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new LinkedInStrategy({
	clientID: process.env.LINKEDIN_CLIENT_ID,
	clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
	callbackURL: `http://${process.env.HOST}:${process.env.PORT}/auth/linkedin/callback`,
	profileFields: ['id','first-name', 'last-name', 'email-address', 'headline', 'public-profile-url'],
	scope: ['r_basicprofile']
}, function(token, tokenSecret, linkedinUser, done) {
	debug(linkedinUser);
	return done(null, linkedinUser);
}));

/* GET Link to initiate LinkedIn oauth */
router.get('/linkedin', passport.authenticate('linkedin', {
	successRedirect: '/code2040',
	failureRedirect: '/',
	state: Date.now()
}));

/* GET callback after LinkedIn oauth */
router.get('/linkedin/callback',
	passport.authenticate('linkedin', {
		successRedirect: '/code2040',
		failureRedirect: '/',
		state: Date.now()
	})
);

module.exports = router;
