import Ember from 'ember';

export default Ember.Route.extend({
        entityName: null,
        model: function() {
            var _entityName = this.get("entityName");
            if(Ember.isNone(_entityName))
            {
                throw "Invalid entity-name provided !!";
            }
            return this.store.find(_entityName);
        }
});
