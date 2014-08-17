'use strict';

angular.module('resumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.coreSkills = { 
      title: 'Core Skills',
      skillArray: [
        { name: 'HTML5',        value: 99 },
        { name: 'CSS3',         value: 96 },
        { name: 'Javascript',   value: 90 },
        { name: 'jQuery',       value: 90 },
        { name: 'AngularJS',    value: 90 },
        { name: 'Sass',         value: 80 },
        { name: 'PHP',          value: 80 },
        { name: 'Wordpress',    value: 90 },
        { name: 'Git',          value: 80 },
        { name: 'Drupal',       value: 55 },
        { name: 'Ruby on Rails',value: 30 },
        { name: 'BatmanJS',     value: 25 }
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
