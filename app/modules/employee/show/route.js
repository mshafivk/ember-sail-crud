import Ember from 'ember';

export default Ember.Route.extend({

         model: function(params){
            var _self=this;
            return this.store.find('employee',params.id).catch(function(error){
                 _self.controllerFor('employee.show').set('errors', JSON.parse(error.responseText));
                // console.log(_self.controllerFor('employee.show').get('errors'));
            });

        },
        exit: function() {

        }
});
