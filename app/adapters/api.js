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
     ajaxError: function(jqXHR, responseText, errorThrown) {
    var error = this._super(jqXHR);
    var jsonErrors=null;
    if (jqXHR && jqXHR.status === 422) {
      jsonErrors = Ember.$.parseJSON(jqXHR.responseText);

      return new DS.InvalidError(jsonErrors);
    } else {
     // return error;
         jsonErrors = Ember.$.parseJSON(jqXHR.responseText);
        return new DS.InvalidError(jsonErrors);
    }

  },
});
