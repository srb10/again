Router.route('/', function(){
        this.render('main');
     //   this.layout('masterLayout');
    }
);

Router.route('route2', function(){
    //this.render('adminView')
    this.render(Meteor.user() ? 'adminView':'main')
});

/*
Router.go('home');
*/
//the following code breaks
/*
Router.route('route2', function(){
    //this.render('adminView')
    if (!Meteor.user()){
        this.render('main');
    } else {
        this.render(Meteor.user() ? 'adminView' : 'main')
    }
});*/
/*var filters = {
    isLoggedIn : function(pause) {
        if(!Meteor.user()){
            this.render('main');
        } else {
            this.next();
        }
    }}*/
// LOGGED IN
/*Router.plugin(true, {
    except: ['home','logout']
});*/

// LOGGED IN
/*Router.plugin('ensureSignedIn', {
    except: ['main']
    //except: ['main','logout']
});*/
