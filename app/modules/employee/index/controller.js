import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
            delete: function(_employee) {
                this.store.find('employee',_employee.id).then(function(_emp){
                _employee.destroyRecord();
                });


            }
        }
});
