import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions:{
        update:function(){
                 this.get("model").save();
                 this.transitionToRoute("employee.show",this.get("model"));
        }
        }

});
