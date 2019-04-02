
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'image-message',
        author: 'Israeli military strikes Hamas targets in Gaza',

        header: 'Added new image',
        text: '"The Israeli military has begun striking Hamas targets throughout Gaza according to local residents and the Israeli military. About four hours after the Israeli bombardment began, at least 10 rockets were fired from Gaza towards Israel. "',
        preview: 'app/profile/israel.jpg',
        link: 'https://www.aljazeera.com/mritems/Images/2019/3/25/7452732599ae403d884de891f9d4c7d2_18.jpg',
        time: '25 Mar 2019',
        expanded: false,
      },
      {
        type: 'geo-message',
        author: 'Act against terrorists; further terror attack',
        header: 'Posted location',
        text: '"Legal definitions of terrorism often require that an attack be planned in .... Marchers at that rally chanted “Jews will not replace us”, ',
        preview: 'app/profile/syria.png',
        link: 'https://www.google.com/maps?biw=2400&bih=1110&q=syria+google+maps&um=1&ie=UTF-8&sa=X&ved=0ahUKEwji8MzqkK3hAhVG1VkKHRS8DKMQ_AUICigB',
        time: '03.11.2019',
        expanded: false,
      },
      {
        type: 'text-message',
        author: 'Germany 10 Suspected of Planning Terror Attack Arrested',
        header: 'Posted new message',
        text: 'The German police arrested 10 people on suspicion of planning a terror attack, an official said.',
        time: '30 March, 2019 - 11:30',
        expanded: false,
      }, {
        type: 'video-message',
        author: 'New Zealand mosque terror attacks',
        header: 'Added new video',
        text: '"New Zealand Prime Minister Jacinda Ardern will return to the city of Christchurch on Wednesday to meet with first responders and victims families."',
        preview: 'app/profile/nz_preview.png',
        link: 'https://youtu.be/LY_-4uCx-88',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      },  {
        type: 'text-message',
        author: 'Isis plot to direct new terror attacks in Europe',

        header: 'Posted new message',
        text: 'An Isis plan to direct new terror attacks in Europe has been uncovered after the group lost the last sliver of its former “caliphate” in Syria.',
        time: 'Mar 24, 2019',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();