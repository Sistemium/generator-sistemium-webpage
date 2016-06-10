(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  }

})();
