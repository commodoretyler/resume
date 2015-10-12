'use strict';

angular.module('resumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.coreSkills = { 
      title: 'Core Skills',
      skillArray: [
        { name: 'HTML5',        value: 99 },
        { name: 'CSS3',         value: 99 },
        { name: 'Javascript',   value: 97 },
        { name: 'jQuery',       value: 95 },
        { name: 'AngularJS',    value: 93 },
        { name: 'Sass',         value: 85 },
        { name: 'PHP',          value: 80 },
        { name: 'Wordpress',    value: 90 },
        { name: 'Git',          value: 90 },
        { name: 'Ruby on Rails',value: 30 },
      ]
    };

    $scope.codeApi = { 
      title: 'Other Code and APIs',
      skillArray: [
        'Twitter',
        'Facebook',
        'Bootstrap',
        'CoffeeScript',
        'HAML',
        'Google Maps',
        'Flot Charts',
        'MEAN.io',
        'MeteorJS',
        'Bower',
        'NPM'
      ]
    };

    $scope.other = { 
      title: 'Other',
      skillArray: [
        'Adobe Creative Suite',
        'Apache',
        'VIM',
        'Command Line Interface',
        'Microsoft Office'
        ]
      };

  });
