/* global moment:false */
(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .constant('moment', moment)
    .value('cgBusyDefaults',{
      message:'Идет загрузка'
    });

})();
