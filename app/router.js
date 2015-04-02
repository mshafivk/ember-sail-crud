import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index',{path:"/"},function(){
        this.route('overview');
        this.resource('employee',{path:"employee"} ,function() {

        this.route('new', function() {});
        this.route('show', {path:"/show/:id"});
        this.route('edit', {path:"/edit/:id"});
      });

  });

});

export default Router;
