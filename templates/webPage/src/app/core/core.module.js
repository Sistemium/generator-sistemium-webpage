'use strict';

(function (ng) {

  ng.module('<%= scriptAppName %>.core', [
    '<%= scriptAppName %>.core.interceptors',
    '<%= scriptAppName %>.core.services',
    '<%= scriptAppName %>.core.filters'
  ]);

})(angular);
