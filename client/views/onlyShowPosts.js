Template.onlyShowPosts.helpers({

    posts: function () {  //automatically reactive because it is formed in the template object
        return Posts.find();
    }
});
