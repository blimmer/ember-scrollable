import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import localMoment from 'phoenix/helpers/local-moment';
import timeZoneAbbreviation from 'phoenix/helpers/time-zone-abbreviation';

Ember.Handlebars.registerBoundHelper('local-moment', localMoment);
Ember.Handlebars.registerBoundHelper('time-zone-abbreviation', timeZoneAbbreviation);
Ember.MODEL_FACTORY_INJECTIONS = true;

var App;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
