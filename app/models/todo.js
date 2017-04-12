import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  isCompleted: DS.attr('boolean')
});
