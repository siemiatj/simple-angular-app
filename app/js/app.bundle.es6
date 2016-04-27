// /* App Bundle */

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

require('angular-material/angular-material.css');
require('font-awesome/css/font-awesome.css');
require('../css/app.scss');

require('./services.es6');
require('./controllers.es6');
require('./directives.es6');

angular.module('app', [
  angularAnimate,
  angularMaterial,
  'app.services',
  'app.controllers',
  'app.directives'
]);

angular.module('app.controllers', [
  'app.controllers.main-controller'
]);

angular.module('app.directives', [
  'app.directives.basic-directive'
]);

angular.module('app.services', [
  'app.services.basic-service'
]);
