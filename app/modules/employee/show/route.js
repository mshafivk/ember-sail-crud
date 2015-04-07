import Ember from 'ember';

export default Ember.Route.extend({

         model: function(params){

            var _self=this;

            var data= this.store.find('employee',params.id).catch(function(error){
                console.log(error.errors);
                //Manually Rejecting a Promise sample code showed below
             //return Ember.RSVP.reject(new Error(error.errors.statusDescription));
                //OR
                throw new Error(error.errors.statusDescription);
               // _self.controllerFor('employee.show').set('errors', error.errors);

                // console.log(_self.controllerFor('employee.show').get('errors'));
            });
             return data;
        },
    actions:{
    /* error: function(error, transition) {
         console.log(error.stack);
      if (error && error.status === 400) {
        // error substate and parent routes do not handle this error
        return this.transitionTo('modelNotFound');
      }

        // Return true to bubble this event to any parent route.
        return true;
        }*/
    },
        exit: function() {

        }
});
