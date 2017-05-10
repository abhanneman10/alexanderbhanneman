(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'vm'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
