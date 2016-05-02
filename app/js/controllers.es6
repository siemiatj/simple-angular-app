'use strict';

/* Controllers */

import { object, extendOwn } from 'underscore';
const dialogTemplate = require('../views/editDialog.tpl.html');
const lightboxTemplate = require('../views/lightbox.tpl.html');

class MainController {
  constructor(...services) {
    Object.assign(this, object(this.constructor.$inject, services));

    this.users = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ];

    //all posts
    // all comments

    this.dropdownVisible = false;
    this.currentUser = this.users[0];
    this.loggedUser = extendOwn({}, this.users[0]);
    this.usersPosts = 

    this.posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "commentsCount": 4,
        'comments': [
          {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          },
          {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
          },
          {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
          }
        ]
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "commentsCount": 2,
        'comments': [
          {
            "postId": 2,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            "postId": 2,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          }
        ]
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        commentsCount: 0,
        comments: []
      }
    ];

    this.photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/30ac17"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/dff9f6"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "http://placehold.it/600/24f355",
        "thumbnailUrl": "http://placehold.it/150/1941e9"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "http://placehold.it/600/d32776",
        "thumbnailUrl": "http://placehold.it/150/39e985"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "http://placehold.it/600/f66b97",
        "thumbnailUrl": "http://placehold.it/150/7735a"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "http://placehold.it/600/56a8c2",
        "thumbnailUrl": "http://placehold.it/150/c672a0"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "http://placehold.it/600/b0f7cc",
        "thumbnailUrl": "http://placehold.it/150/4105a5"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "http://placehold.it/600/54176f",
        "thumbnailUrl": "http://placehold.it/150/412ffd"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "http://placehold.it/600/51aa97",
        "thumbnailUrl": "http://placehold.it/150/15c072"
      }
    ];

    this._basicFunction();
  }

  _basicFunction() {
    const { $scope, basicService } = this;

    basicService.doRequest()
      .then((resp) => {
        $scope.text = 'Hello World !';
      }, () => {
        $scope.text = 'Error !';
      });
  }

  toggleList() {
    console.log('show/hide menu');
  }

  selectUser(idx) {
    this.currentUser = this.users[idx];
  }

  toggleUserEditDialog(ev) {
    let { $mdMedia, $mdDialog, $scope, loggedUser } = this;
    const FULLSCREEN = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: dialogTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: FULLSCREEN,
      resolve: {
        userModel: () => {
          return loggedUser;
        }
      }
    });
    // we don't need those promises for now
    // .then(answer => {}, () => {
    // });
    
    // watch for resizing screen
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  }

  loadPhotoModal(ev, idx) {
    let { $mdMedia, $mdDialog, $scope, photos } = this;
    const FULLSCREEN = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

    $mdDialog.show({
      controller: LightboxController,
      templateUrl: lightboxTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: FULLSCREEN,
      resolve: {
        image: () => {
          return photos[idx];
        }
      }
    })
    
    // watch for resizing screen
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  }
};

MainController.$inject = [
  '$scope',
  '$mdMedia',
  '$mdSidenav', 
  '$mdDialog',
  'basicService'
];

angular.module('app.controllers.main-controller', [])
  .controller('mainController', MainController);


class DialogController {
  constructor(...services) {
    Object.assign(this, object(this.constructor.$inject, services));

    this.$scope.userModel = extendOwn({}, this.userModel);
    this.$scope.hide = this.hide.bind(this);
    this.$scope.save = this.save.bind(this);
    this.$scope.cancel = this.cancel.bind(this);
  }

  hide() {
    this.$mdDialog.hide();
  }

  save() {
    this.userModel = extendOwn(this.userModel, this.$scope.userModel);
    this.$mdDialog.hide();
  }

  cancel() {
    this.$mdDialog.cancel();
  }
}

DialogController.$inject = [
  '$scope',
  '$mdDialog',
  'userModel'
];

angular.module('app.controllers.dialog-controller', [])
  .controller('dialogController', DialogController);



class LightboxController {
  constructor(...services) {
    Object.assign(this, object(this.constructor.$inject, services));

    this.$scope.image = this.image;
  }

  hide() {
    this.$mdDialog.hide();
  }
}

LightboxController.$inject = [
  '$scope',
  '$mdDialog',
  'image'
];

angular.module('app.controllers.lightbox-controller', [])
  .controller('lightboxController', LightboxController);
