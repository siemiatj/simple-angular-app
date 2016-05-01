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

const ICON_CHEVRON_L = require("../assets/ic_chevron_left.svg");
const ICON_CHEVRON_R = require("../assets/ic_chevron_right.svg");
const ICON_EXPAND_M  = require("../assets/ic_expand_more.svg");
const ICON_EXPAND_L  = require("../assets/ic_expand_less.svg");
const ICON_MENU      = require("../assets/ic_menu.svg");
const ICON_EMAIL     = require("../assets/ic_email.svg");

angular.module('app').config(function($mdIconProvider){
    $mdIconProvider
    .icon("chevron_left", ICON_CHEVRON_L, 24)
    .icon("chevron_right", ICON_CHEVRON_R, 24)
    .icon("expand_more", ICON_EXPAND_M, 24)
    .icon("expand_less", ICON_EXPAND_L, 24)
    .icon("menu", ICON_MENU, 24)
    .icon("email", ICON_EMAIL, 24)
});