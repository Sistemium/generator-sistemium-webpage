'use strict';

(function () {

  function saApp ($window,schema) {

    var appIdKey = 'saAppId';

    var appId = $window.localStorage.getItem(appIdKey);

    if (!appId) {
      appId = uuid.v4();
      $window.localStorage.setItem(appIdKey,appId)
    }

    function init () {

      var LogMessage = schema.model('LogMessage');
      var logMsg = {
        event: 'appInit',
        appName: 'j-sistemium',
        appId: appId,
        version: '0.2.7'
      };

      LogMessage.create({
        text: angular.toJson(logMsg),
        type: 'important',
        source: 'jsdata'
      });

    }

    return {
      init: init
    };

  }

  angular.module('<%= scriptAppName %>.core.services')
    .service('saApp', saApp);

})();
