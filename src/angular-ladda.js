/**!
 * AngularJS Ladda directive
 * @author Chungsub Kim <subicura@subicura.com>
 */

/* global Ladda */
(function () {
  'use strict';

  angular.module('angular-ladda', []).directive(
    'ladda',
    [
      '$compile',
      function ($compile) {
        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            element.addClass('ladda-button');
            element.append(' <span style="display:none" class="glyphicon glyphicon-ok"></span>');
            element.append(' <span style="display:none" class="glyphicon glyphicon-remove"></span>');
            if(angular.isUndefined(element.attr('data-style'))) {
              element.attr('data-style', 'zoom-in');
            }
            var ladda = Ladda.create( element[0] );
            $compile(angular.element(element.children()[0]).contents())(scope);

            scope.$watch(attrs.ladda, function(loading) {
              if(loading || angular.isNumber(loading)) {
                if(!ladda.isLoading()) {
                  ladda.start();
                }
                if(angular.isNumber(loading)) {
                  ladda.setProgress(loading);
                }
              } else {
                if (ladda.isLoading()) {
                  ladda.stop();
                  console.log(scope.btn_error);
                  var ladda_class='ladda-success';
                  if(scope.btn_error){
                    var ladda_class='ladda-remove';

                  }
                  element.addClass(ladda_class);
                  setTimeout(function () {
                    element.removeClass(ladda_class);
                  }, 2000);
                }
              }
            });
          }
        };
      }
    ]
  );
})();
