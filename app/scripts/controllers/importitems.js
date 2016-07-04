'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ImportitemsCtrl
 * @description
 * # ImportitemsCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ImportitemsCtrl', function(BASEURL, $http, ngToast) {
    function setResponse(success, html) {
      var cl = (success) ? 'bg-success' : 'bg-danger';
      jQuery('#form-response').removeClass().addClass(cl).html(html);
    }

    this.uploadFile = function() {
      var fd = new FormData();
      fd.append('csv-file', document.getElementById('csv-file').files[0]);

      $http({
        url: BASEURL + '/api/items/import',
        method: 'POST',
        data: fd,
        headers: {'Content-Type': undefined}
      })
      .success(function(){
        ngToast.create({
            className: 'success',
            dismissOnClick: true,
            content: 'Upload done!',
        });
        setResponse(
          true,
          '<h5>Upload succesful</h5><p>Our staff will review the items and get in touch with you if there is any problem.<br>Thank you!</p>'
        );
        jQuery('#form-upload').remove();
      })
      .error(function(err){
        ngToast.create({
            className: 'danger',
            dismissOnClick: true,
            content: 'Upload failed! See below for details.',
        });

        setResponse(
          false,
          '<h5>The following lines are invalid:</h5><pre>'+err.join('\n')+'</pre>'
        );
      });
    };
  });
