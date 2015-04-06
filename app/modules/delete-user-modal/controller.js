import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
            delete: function() {
             var _employee=this.get('model');
                this.store.find('employee',_employee.id).then(function(_employee){
                _employee.destroyRecord();
                });


            }
    }
});
