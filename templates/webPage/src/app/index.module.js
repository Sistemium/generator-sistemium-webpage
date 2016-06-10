(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>', [
      '<%= scriptAppName %>.core',
      '<%= scriptAppName %>.components',
      '<%= scriptAppName %>.directives',
      '<%= scriptAppName %>.auth',
      'ngAnimate',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ui.router',
      'ui.router.stateHelper',
      'ui.bootstrap',
      'LocalStorageModule',
      'as.sortable',
      'ng-appcache',
      'ui.mask',
      'sistemiumBootstrap',
      'cgBusy'
    ])
    .run(function(saApp){
      saApp.init();
    });

})();
