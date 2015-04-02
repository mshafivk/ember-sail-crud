import Ember from 'ember';

export default Ember.Route.extend({
         model: function(){
        // the model for this route is a new empty Ember.Object
            return this.store.createRecord('employee');
//        return Ember.Object.createWithMixins(Ember.Copyable, {});
        },
        exit: function() {
            var _model = this.get("controller").get("model");
            if(_model.get("isNew") && !_model.get("isSaving")) {
                _model.deleteRecord();
            }
        }
});
