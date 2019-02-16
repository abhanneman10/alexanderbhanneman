(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.proficientSkills = [
      {
        type: 'C# .NET Core',
        current: true
      },
      {
        type: 'ElasticSearch',
        current: true
      },
      {
        type: 'SQL Server',
        current: true
      },
      {
        type: 'Azure',
        current: true
      },
      {
        type: 'Kubernetes',
        current: true
      },
      {
        type: 'Docker',
        current: true
      },
      {
        type: 'REST & Micro services',
        current: true
      },
      {
        type: 'Kong',
        current: true
      },
      {
        type: 'AngularJS',
        current: true
      },
      {
        type: 'React & Redux',
        current: true
      },
      {
        type: 'Javascript & Typescript',
        current: true
      },
      {
        type: 'HTML',
        current: true
      },
      {
        type: 'CSS, Bootstrap, SemanticUI',
        current: true
      },
      {
        type: 'Auth0',
        current: true
      }
    ];

    vm.familiarSkills = [
      {
        type: 'Redis Cache',
        current: true
      },
      {
        type: 'Jenkins',
        current: true
      },
      {
        type: 'Powershell',
        current: true
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
        type: 'RabbitMQ',
        current: false
      }
    ]
  }
})();
