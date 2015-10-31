/*
Posts = new Mongo.Collection('posts');
*/
/*Posts.find(); // finds all your teams
Posts.find().fetch(); // finds all your teams and returns them as JSON
Posts.insert({name: 'Post 1'}); // Inserts a team into Mongo
Posts.update({_id: id}, {$set: {name: 'Post 2'}}); // Update a team
Posts.remove(id); // Removes a team*/

if (Meteor.isClient) {
        // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // actions of the event start here:
            Posts.insert({name: 'Post 1'}); // Inserts a post into Mongo
            Posts.insert({name: 'Post 331'}); // Inserts a post into Mongo
           var it = Posts.find().fetch(); // finds all your posts and returns them as JSON
         //    thang = JSON.parse(it);

            alert(toString(it));
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
