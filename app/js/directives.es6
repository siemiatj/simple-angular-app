'use strict';

/* Directives */


const tpl = `
<div class="input_text">
  <label for="{{ name }}">{{ name }}</label>
  <input
  type="text'"
  name="{{ name }}"
  ng-model="model"
  >
</div>`;

angular.module('app.directives.text-input', [])
  .directive('textInput', [
    function () {
      return {
        restrict: 'E',
        template: tpl,
        scope: {
          name: '@',
          model: '=?'
        },
        link: function (scope) {
          console.log('MODEL: ', scope.model);
        }
      };
    }
  ]);
