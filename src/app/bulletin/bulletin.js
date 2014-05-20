angular.module( 'avalancheCanada.bulletin', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngResource',
  'directives.sponsorLogo'
])

.config(function config( $stateProvider ) {
  $stateProvider
    //! Abstract top level bulletin State.
    .state( 'bulletin', {
      abstract: true,
      url: '/bulletin',
      data:{ pageTitle: 'Bulletin' },
      views: {
        "main": {
          controller: 'BulletinCtrl',
          templateUrl: 'bulletin/bulletin.tpl.html'
        }
      }
    })

    //! List Region state
    .state( 'bulletin.list', {
      url: '/list',
      views: {
        "main": {
          controller: 'RegionListCtrl',
          templateUrl: 'bulletin/regionList.tpl.html'
        }
      }
    })

    //! Bulletin Regional View State
    .state( 'bulletin.details', {
      //! URL Param regionName
      url: '/{regionName}',
      views: {
        "main": {
          controller: 'BulletinDetailsCtrl',
          templateUrl: 'bulletin/bulletinDetails.tpl.html'
        }
      }
    });

})

.controller( 'BulletinCtrl', function BulletinCtrl( $scope ) {
})

.controller( 'BulletinDetailsCtrl', function BulletinDetailsCtrl( $scope, $stateParams, $log ) {
  $scope.regionName = $stateParams.regionName;

})

.controller( 'RegionListCtrl', function RegionListCtrl( $scope ) {
});
