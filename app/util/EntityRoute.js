import Ember from 'ember';
import Employees from '../models/employees';

export default Ember.Route.extend({

    entityName: null,
    entityKey: null,

    init: function() {
        this._super();
        var _entityName = this.get("entityName");
        if (Ember.isNone(this.entityName)) {
            throw "Invalid entity-name provided !!";
        }
        if (Ember.isNone(this.entityKey)) {
            throw "Invalid entity-key provided !!";
        }
    },
    model: function(params) {
        console.log("Inside model == this.entityName = " + this.entityName);
        console.log("Inside model == params = " + JSON.stringify(params));
        console.log("Inside model == Employees = " + Employees);
//        this.store.find(this.entityName, {"pid": params.pid}).then(function(_item) {
//            console.log("{{{{{{{{{{{{{{{{{{{{{{{{{  _item = " + _item);
//        });
//        Contact.find({"pid": params.pid}).then(function(_item) {
//            console.log("{{{{{{{{{{{{{{{{{{{{{{{{{  _item = " + _item);
//        });
        return this.store.find(this.entityName, params.pid);
    }
});
