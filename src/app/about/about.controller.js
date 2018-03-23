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
        type: 'C# .NET',
        current: true
      },
      {
        type: 'ElasticSearch',
        current: true
      },
      {
        type: 'RabbitMQ',
        current: true
      },
      {
        type: 'Java',
        current: false
      },
      {
        type: 'SQL Server',
        current: true
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
        type: 'React - Redux',
        current: false
      },
      {
        type: 'Node.js',
        current: false
      },
      {
        type: 'MongoDB',
        current: false
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
        type: 'Auth0',
        current: true
      }
    ]
  }
})();
