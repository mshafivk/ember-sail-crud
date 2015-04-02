import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions:{
        save: function() {
            console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> model " + this.get("model"));
            console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Email " + this.get("model").get("email"));
            this.get('model').set('creationDate', new Date());
//            var newContact = this.store.createRecord("contact", this.get("model"));
            try{
            this.get('model').save();
            }
            catch(err)
            {
                console.log(err);
            }
            this.transitionToRoute("employee");
        }
    }
});
