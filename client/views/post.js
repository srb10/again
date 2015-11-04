//this is code for singular - only edit or remove a single team
Template.post.helpers({
    isEditingPost: function() {
        ///  if (console.log(this.toString())) {
/*        console.log(Meteor.userID);
        if (Meteor.userId>1){
            return false;}
        else{*/
            return Session.get('editedPostId') === this._id;  //this looks like an error?
        }
   // }
});

Template.post.events({
    'click a.edit': function(e, tpl){
        e.preventDefault();
        Session.set('editedPostId', this._id);
    },
    "submit form.form-edit": function(e, tpl){
        e.preventDefault();

        var postName = tpl.$('input[name="name"]').val();
        if (postName.length) {
            Posts.update(this._id, {$set: {name: postName}});
            Session.set('editedPostId', null);
        }
    },
    'click a.cancel': function(e, tpl){
        e.preventDefault();
        Session.set('editedPostId', null);
    },
    'click a.remove': function(e, tpl){  //'e' for event, 'tpl' for template
        e.preventDefault();
        Posts.remove(this._id);
    }
});

