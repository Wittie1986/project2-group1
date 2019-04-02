
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components', [
    'BlurAdmin.pages.components.mail',
    // 'BlurAdmin.pages.components.timeline',
    // 'BlurAdmin.pages.components.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Terrorist Attacks',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 100,
          },
        });
  }

})();
