import DS from 'ember-data';

export default DS.Model.extend({
  interaction: DS.belongsTo('interaction'),
  interactionType: DS.attr('string'),
  duration: DS.attr('number'),
  quality: DS.attr('string'),
  speakQuality: DS.attr('string'),
  speakExplanation: DS.attr('string')
});
