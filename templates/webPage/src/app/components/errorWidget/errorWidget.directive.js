'use strict';

(function () {

  angular.module('<%= scriptAppName %>.components')
    .directive('errorWidget', function () {

      return {

        restrict: 'AC',
        templateUrl: 'app/components/errorWidget/errorWidget.html',
        controllerAs: 'dm',

        controller: function (Errors) {
          var dm = this;
          dm.errors =  Errors.errors;
          dm.closeError = function (index) {
            dm.errors.splice(index, 1);
          };
        }

      };

    });
}());
