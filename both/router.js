Router.route('/', function(){
        this.render('main');
     //   this.layout('masterLayout');
    }
);

Router.route('route2', function(){
    //this.render('adminView')
    this.render(Meteor.user() ? 'adminView':'main')
});


