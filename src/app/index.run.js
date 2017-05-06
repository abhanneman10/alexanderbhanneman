(function() {
  'use strict';

  angular
    .module('alexanderbhanneman')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
