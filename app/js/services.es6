'use strict';

/* Services */

import Redux from 'redux';

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

angular.module('app.service.list-reducer')
  .service('listReducer', function () {
    return function(state = { list: []}, action ) {
      switch (action.type) {
        case 'ADD_ITEM':
          return [...state, action.data];
          // state.list.push({ value: '', added: false });
          // return state;
        // case 'REMOVE_ITEM':
        //   state.list.splice(action.index, 1);
        //   return state;
        default:
          return state;
      }
    };
  });

angular.module('app.services.list-store')
  .service('listStore', [
    'Redux', 
    'listReducer', 
    function (Redux, listReducer) {
      let initialState = {
        list: []
      };
      return Redux.createStore(listReducer, initialState);
    }
  ]);

// angular.module('app.services.current-user-store').service('currentUserStore', function () {
//   return function(state = { list: Immutable.List([])}, action ) {
//     switch (action.type) {
//       case 'ADD_ITEM':
//         state.list = state.list.push(Immutable.Map({ value: '', added: false }));
//         return state;
//       case 'REMOVE_ITEM':
//         state.list = state.list.splice(action.index, 1);
//         return state;
//       case 'CONFIRM_ITEM':
//         state.list = state.list.setIn([action.index, 'added'] ,true);
//         return state;
//       case 'MODIFY_ITEM':
//         state.list = state.list.setIn([action.index, 'value'], action.value);
//         return state;
//       default:
//         return state;
//     }
//   };
// });