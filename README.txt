CRUD remove from main page
send out testing information to testers
Add a way to redirect to logout directly to Main page
Text box needs cleared when “submit/ create” occurs


Meteor.logout = function (callback) {
  Meteor.apply('logout', [], {wait: true}, function(error, result) {
    if (error) {
      callback && callback(error);
    } else {
      makeClientLoggedOut();
      callback && callback();
    }
  });
};
if (Meteor.user)

 In the restricted area you need to check whether the user is logged
 in reactively and if not show a message. If you've done this have a
  at the javascript console to see if there are any errors that may be
  preventing the template changing

  It also takes a bit of time to log the user out i hope you've taken
  this into account its not latency compensated.

  maybe I can do this in the router- if !currentUser route to main