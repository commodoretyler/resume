'use strict';

angular.module('resumeApp')
  .directive('percentBar', function() {
    return {
      scope: {
        value: '='
      },
      transclude: true,
      restrict: 'AE',
      templateUrl: 'views/directives/percentbar.html',
      link: function(scope, elem, attrs) {

        $(elem).find(".bar").width(scope.value + "%");

      }
    }
  });
