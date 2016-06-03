'use strict';

angular.module('myApp.movies')

    .constant('itemDetailsState', {
        name: 'items.detail',
        options: {
            url: '/{itemId}',

            views: {
                "content@root": {
                    templateUrl: 'views/detail/item-detail.html',
                    controller: 'ItemDetailCtrl'
                }
            },

            resolve: {
                //we abuse the resolve feature for eventual redirection
                redirect: function($state, $stateParams, Item, $timeout, $q){
                    var mid = $stateParams.itemId;
                    if (!mid) {
                        //timeout because the transition cannot happen from here
                        $timeout(function(){
                            $state.go("items.list");
                        });
                        return $q.reject();
                    }
                }
            },
            ncyBreadcrumb: {
                // a bit ugly (and not stable), but ncybreadcrumbs doesn't support direct access
                // to a view controller yet if there are multiple views
                label: "{{$$childHead.$$childHead.item.title}}",
                parent: "items.list"
            }

        }
    })
    .controller('ItemDetailCtrl', function($scope, Item, $mdToast, $mdDialog, $stateParams, $state, currUser) {

        $scope.item = Item.get({itemId: $stateParams.itemId});

    });