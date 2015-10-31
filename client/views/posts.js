///////////HELPERS///HELPERS///HELPERS///HELPERS///HELPERS///HELPERS///HELPERS//
Template.posts.helpers({
    isCreatingPost: function() {  //Note: the name of the helper is 'isCreating Team
        //return true;  //commented out before installing the next line of code
        return Session.get('isCreatingPost');
    },
    posts: function () {  //automatically reactive because it is formed in the template object
        return Posts.find();
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////
///////////EVENTS///EVENTS///EVENTS///EVENTS///EVENTS///EVENTS///EVENTS///EVENTS///EVENTS///////////////EVENTS
Template.posts.events({
    'click a.create': function(e, tpl){
        e.preventDefault();
        Session.set('isCreatingPost', true);
    },
    'click a.cancel': function(e, tpl) {
        e.preventDefault();
        Session.set('isCreatingPost', false);
    },
    'submit form.create-post': function(e, tpl) {  //'submit' works when you hit the enter key
        e.preventDefault();  ///As an alternative, you could also make each function return false.
        var postName = tpl.$('input[name=name]').val();    //otherwise you could hit 'enter, nothing would happen
        Posts.insert({name: postName }, function(error, _id){
            if(error){
                alert(error);
                Session.set('isCreatingPost', true);     ///TODO: see 2.24 at http://www.meteor-tutorial.org/book/1_1_first_app#uid111
                Tracker.afterFlush(function() {  //TODO: this solves some problem that can plague developers and make them quitMeteor altogether.
                    tpl.$('input[name=name]').val(postName); //val() is a geter/setter method for HTML form elements, as well as checkboxes, radio adn <select> elements
                });
            }
        });
    }


});