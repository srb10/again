Posts = new Mongo.Collection('posts');

///// ***None of the following code is thought out or correct.
////TODO: rewrite this code so it makes sense.
Posts.allow({
    insert: function (userId){
        //user **should**  be logged in, but this allows anyone in.
        return (userId === userId);
    },
    update: function(userId){
    return (userId === userId);
},
    remove:function(userId){
        return(userId===userId);
    }
});