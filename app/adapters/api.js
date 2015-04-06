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

    if (jqXHR && jqXHR.status === 422) {
      var jsonErrors = Ember.$.parseJSON(jqXHR.responseText);

      return new DS.InvalidError(jsonErrors);
    } else {
      return error;
    }
    /*var isObject = jqXHR !== null && typeof jqXHR === 'object';

    if (isObject) {
      jqXHR.then = null;
      if (!jqXHR.errorThrown) {
        if (typeof errorThrown === 'string') {
          jqXHR.errorThrown = new Error(errorThrown);
        } else {
          jqXHR.errorThrown = errorThrown;
        }
      }
    }
console.log(jqXHR);
    return jqXHR;*/
  },
});
