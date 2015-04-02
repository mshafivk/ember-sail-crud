import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
      namespace: 'api/v1',
    host: 'http://localhost:1337',
    modelType: null,
    pathForType: function(type) {
        if(Ember.isNone(this.get("modelType"))){
            throw this + ".modelType is not set!!!";
        }
             return this.get("modelType");
  },
     /*ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);
    var data = Ember.$.parseJSON(jqXHR.responseText);

    if (data.errors) {
      return new DS.InvalidError(this.formatError(data));
    } else {
      return error;
    }
  }*/
});
