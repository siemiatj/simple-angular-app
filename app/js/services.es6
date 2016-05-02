'use strict';

/* Services */

angular.module('app.services.data-service', [])
  .factory('dataService', ['$http', function($http) {

    function getUsers() {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users'
      });
    }

    function getPosts(userid) {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users/'+userid+'/posts'
      });
    }

    function getComments(postid) {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts/'+postid+'/comments'
      });
    }

    function getImages() {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/albums/1/photos'
      });
    }

    return {
      getUsers: getUsers,
      getPosts: getPosts,
      getComments: getComments,
      getImages: getImages
    };
  }]);