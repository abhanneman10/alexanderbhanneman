(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController() {
    var vm = this;

    vm.items = [
      {
        title: 'Starbrite Window Cleaning Website',
        link: '',
        image: '../../assets/images/starbrite.png',
        description: 'Coming Soon (July 2017)'
      },
      {
        title: 'Bluffs Bar Website',
        link: 'http://www.thebluffsbar.com',
        image: '../../assets/images/bluffsbar.png',
        description: 'MEAN Stack (MongoDB, Express, AngularJs, NodeJs) website styled using Bootstrap.' +
        ' My senior year of college (\'14-\'15) I taught myself M.E.A.N. and built this website with two other colleagues as an extracurricular project.' +
        ' We built this website from scratch for The Bluffs Bar, located in Hager City, WI.'
      },
      {
        title: 'Dependable Builders Website',
        link: 'http://www.dependablebuilders.com',
        image: '../../assets/images/dependablebuilders.png',
        description: 'The summer after my senior year of college I enhanced this currently existing site - Dependable Builders, located in Lakeville, MN.' +
        ' I implemented a content management system using drag and drop for images to add and delete pictures, and enhanced ' +
        ' the home, services, photos, and testimonials pages.'
      },
      {
        title: 'My Old Resume Website',
        link: 'http://alexbhanneman.herokuapp.com',
        image: '../../assets/images/oldresume.png',
        description: 'Going into my last semester of college I made a resume website to market myself ' +
        'college (Fall \'15) and applying for jobs to start my career.'
      }
    ]
  }
})();
