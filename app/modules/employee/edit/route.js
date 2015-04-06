import Ember from 'ember';
export default Ember.Route.extend({
        model: function(params){
            return this.store.find('employee',params.id);
        },
        exit: function() {
            var _model = this.get("controller").get("model");
            if(_model.get("isNew") && !_model.get("isSaving")) {
                _model.deleteRecord();
            }
        }
});
