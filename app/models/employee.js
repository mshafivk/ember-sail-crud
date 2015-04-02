import DS from 'ember-data';

export default DS.Model.extend({
     name:DS.attr(),
     email:DS.attr(),
     age:DS.attr(),
     basic:DS.attr(),
     mobile:DS.attr()

});
