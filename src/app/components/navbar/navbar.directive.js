(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.show = show;
      vm.showModal = false;

      function show(){
        console.log('hi');
        vm.showModal = true;
      }
    }
  }

})();
