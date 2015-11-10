//this is code for a singular post- only edit or remove a single post
Template.post.helpers({
    isEditingPost: function() {
        ///  if (console.log(this.toString())) {
/*        console.log(Meteor.userID);
        if (Meteor.userId>1){
            return false;}
        else{*/
        //This code was from the tutorial...I thought...need to check it and see.
        //I rememberthinking it looked like an error when I typed it --SRB
            return Session.get('editedPostId') === this._id;  //this looks like an error?
        }
   // }
});

//The click events:
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

