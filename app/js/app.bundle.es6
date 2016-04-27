// /* App Bundle */

import angular from 'angular';


// require('../../node_modules/angular-bootstrap/ui-bootstrap-tpls');
require('./services.es6');
require('./controllers.es6');
require('./directives.es6');
// require('bootstrap');
require('bootstrap-webpack');

// import angular from 'angular';
// import * from "services";

angular.module('app', [
    // 'ui.bootstrap',
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

// import angular from 'angular';

// // import '../style/app.css';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   };
// };

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

// const MODULE_NAME = 'app';

// angular.module(MODULE_NAME, [])
//   .directive('app', app)
//   .controller('AppCtrl', AppCtrl);

// export default MODULE_NAME;