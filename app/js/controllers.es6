'use strict';

/* Controllers */

import { object, extendOwn } from 'underscore';
const dialogTemplate = require('../views/editDialog.tpl.html');
const lightboxTemplate = require('../views/lightbox.tpl.html');

class MainController {
  constructor(...services) {
    Object.assign(this, object(this.constructor.$inject, services));

    this.dropdownVisible = false;
    this.users = null;
    this.photos = null;
    this.posts = null;
    this.currentUser = null;
    this.loggedUser = null;

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

    this.getUsers();
    this.getPhotos();
  }

  getUsers() {
    const { dataService } = this;

    dataService.getUsers()
      .then((resp) => {
        this.users = resp.data;
        this.currentUser = this.users[0];
        this.loggedUser = extendOwn({}, this.users[0]);

        this.getPosts(this.currentUser.id)
      }, () => {
        console.error('Error fetching data');
      });
  }

  getPhotos() {
    const { dataService } = this;

    dataService.getImages()
      .then((resp) => {
        this.photos = resp.data.splice(0, 9);
      }, () => {
        console.error('Error fetching data');
      });
  }

  getPosts(userid) {
    console.log("USERID: ", userid);
    // const { dataService } = this;

    // dataService.getImages()
    //   .then((resp) => {
    //     this.photos = resp.data.splice(0, 9);
    //   }, () => {
    //     console.error('Error fetching data');
    //   });
  }

  toggleList() {
    this.$mdSidenav('left').toggle();
  }

  selectUser(idx) {
    this.currentUser = this.users[idx];
    this.getPosts(idx);
  }

  toggleUserEditDialog(ev) {
    let { $mdMedia, $mdDialog, $scope, loggedUser } = this;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: dialogTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false,
      resolve: {
        userModel: () => {
          return loggedUser;
        }
      }
    });
    // we don't need those promises for now
    // .then(answer => {}, () => {
    // });
  }

  loadPhotoModal(ev, idx) {
    let { $mdMedia, $mdDialog, $scope, photos } = this;

    $mdDialog.show({
      controller: LightboxController,
      templateUrl: lightboxTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false,
      resolve: {
        image: () => {
          return photos[idx];
        }
      }
    })
  }
};

MainController.$inject = [
  '$scope',
  '$mdMedia',
  '$mdSidenav', 
  '$mdDialog',
  'dataService'
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
    this.$scope.hide = this.hide.bind(this);
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
