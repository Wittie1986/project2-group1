(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.myNewPage', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('myNewPage', {
            url: '/myNewPage',
            templateUrl: 'app/pages/myNewPage/myNewPage.html',
            title: 'My New Page',
            sidebarMeta: {
              order: 0,
            },
          });
    }
  
  })();