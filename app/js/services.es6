'use strict';

/* Services */

import * as Redux from 'redux';
import Immutable from 'immutable';

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

angular.module('app.services.redux', [])
  .service('Redux', function () {
    return Redux;
  });

angular.module('app.services.users-reducer', [])
.service('usersReducer', function () {
  return function(state, action) {
    switch (action.type) {
      case 'ADD_USERS':
        action.data.forEach(usr => {
          state.users = state.users.push(Immutable.Map(usr));
        });
        return state;
      default:
        return state;
    }
  };
});

angular.module('app.services.application-store', [])
  .service('applicationStore', [
    'Redux',
    'usersReducer',
    function (Rdx, usersReducer) {
      let initialState = {
        users: Immutable.List([])
      };
      return Rdx.createStore(usersReducer, initialState);
  }]);