'use strict';

/* Directives */

import { debounce } from 'underscore';

// import accordion from 'angular-ui-bootstrap/src/accordion';
// import datepicker from 'angular-ui-bootstrap/src/datepicker';

// angular.module('myModule', [accordion, datepicker]);

const tpl = `
<span>
{{ variable }}
</span>`;

angular.module('app.directives.basic-directive', [])
  .directive('basicDirective', [
    function () {
      return {
        restrict: 'E',
        template: tpl,
        scope: {
          variable: '@'
        },
        link: function (scope) {
        }
      };
    }
  ]);
