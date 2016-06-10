(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>.components')
    .directive('navbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    return {

      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: 'NavbarController',
      controllerAs: 'vm',
      bindToController: true

    };
  }

})();
