(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .run(run)
    .service('DEBUG',debugService)
  ;

  function debugService (saDebug) {
    return saDebug.log('stg:log');
  }

  function run(Sockets,InitService,DEBUG) {

    InitService.then(Sockets.init);

    InitService.init(
      //InitService.localDevMode ? {} :
      {
        url:{
          socket: 'https://socket2.sistemium.com'
        },
        jsDataPrefix: 'dev/'
      }

    );

    Sockets.on('jsData:update',function(data){
      DEBUG ('jsData:update', data);
    });

  }

})();
