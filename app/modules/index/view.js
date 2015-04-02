import Ember from 'ember';
export default Ember.View.extend({

    init: function() {
        this._super();
    },
    didInsertElement: function() {
        Ember.$(document).ready(function() {
              Ember.$('[data-toggle=offcanvas]').click(function() {
                Ember.$('.row-offcanvas').toggleClass('active');
              });
          /*  Ember.$("#create_user").validate({
                rules:{
                name:{
                required:true
                },
                email:{
                required:true,
                email:true},
                age:{
                required:true,
                number:true
                }
            }
            });
        });*/


    });
        Ember.run.next(this, function() {


        });
     }


});
