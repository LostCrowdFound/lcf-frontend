'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:RequestadCtrl
 * @description
 * # RequestadCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('RequestadCtrl', function ($scope, BASEURL, $http, ngToast) {
    $scope.inputHeader = '';
    $scope.inputBody = '';
    $scope.inputTarget = '';
    $scope.inputKeywords = '';

    function setResponse(success, html) {
      var cl = (success) ? 'bg-success' : 'bg-danger';
      jQuery('#form-response').removeClass().addClass(cl).html(html);
    }

    $scope.sendRequest = function() {
      var req = {
          header: $scope.header,
          body: $scope.body,
          target: $scope.target,
          keywords: $scope.keywords,
      };
      if(req.header.length < 1 || req.body.length < 1 ||
         req.target.length < 1 || req.keywords.length < 1) {
        return; // do nothing when form not completely filled yet.
      }

      $http.post(BASEURL + '/api/ads', req)
      .success(function(){
        ngToast.create({
            className: 'success',
            dismissOnClick: true,
            content: 'Request sent!',
        });
        setResponse(
          true,
          '<h5>Request sent</h5><p>Our staff will review the request and get in touch with you.<br>Thank you!</p>'
        );
        jQuery('#form-request').remove();
      })
      .error(function(err){
        ngToast.create({
            className: 'danger',
            dismissOnClick: true,
            content: 'Request failed! See below for details.',
        });

        setResponse(
          false,
          err
        );
      });
    };
  });
