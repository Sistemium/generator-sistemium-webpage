(function () {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Menu) {
    var vm = this;

    //vm.Auth = Auth;
    vm.data = Menu.root();

  }
})();
