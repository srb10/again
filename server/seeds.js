Meteor.startup(function () {
    if (Posts.find().count() === 0) {
        [
            {name: "Barcelona"},
            {name: "Real Madrid"},
            {name: "Matt's team"}
        ].forEach(function(arm){
                Posts.insert(arm);
            });
    }
});