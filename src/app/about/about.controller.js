(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.skills = [
      {
        type: '.NET',
        current: true
      },
      {
        type: 'C#',
        current: true
      },
      {
        type: 'ElasticSearch',
        current: true
      },
      {
        type: 'Java',
        current: false
      },
      {
        type: 'VisualBasic',
        current: true
      },
      {
        type: 'WPF',
        current: true
      },
      {
        type: 'SQL Server',
        current: true
      },
      {
        type: 'PHP',
        current: false
      },
      {
        type: 'Redis Cache',
        current: true
      },
      {
        type: 'REST web services',
        current: true
      },
      {
        type: 'MS Azure\'s App Insights',
        current: true
      }
    ];

    vm.skillsWeb = [
      {
        type: 'AngularJS',
        current: true
      },
      {
        type: 'Node.js',
        current: true
      },
      {
        type: 'JQuery',
        current: true
      },
      {
        type: 'JavaScript',
        current: true
      },
      {
        type: 'HTML',
        current: true
      },
      {
        type: 'CSS',
        current: true
      },
      {
        type: 'Boostrap',
        current: true
      },
      {
        type: 'React',
        current: false
      },
      {
        type: 'Redux',
        current: false
      },
      {
        type: 'Material-UI',
        current: false
      },
      {
        type: 'Auth0',
        current: true
      }
    ]
  }
})();
