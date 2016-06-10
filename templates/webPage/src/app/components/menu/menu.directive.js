(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>.components')
    .directive('stmMenu', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    return {

      restrict: 'AC',
      templateUrl: 'app/components/menu/menu.html',
      scope: {
        header: '=',
        items: '='
      }

    };
  }

})();
