(function () {

  'use strict';

  angular.module('<%= scriptAppName %>.core.services')
    .factory('InitCtrlService', function (saNgTable) {

      function setup(ctrl) {
        return angular.extend(ctrl, {
          setupNgTable: function setupNgTable(model) {
            return saNgTable.setup(ctrl, model);
          }
        });
      }

      return {
        setup: setup
      };

    })
  ;

})();
