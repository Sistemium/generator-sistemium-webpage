(function () {
  'use strict';
  angular.module('<%= scriptAppName %>.models')
    .run(function (schema) {
      schema.register({
        name: 'LogMessage'
      });
    })
  ;

})();
