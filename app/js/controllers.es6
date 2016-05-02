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
    const { dataService } = this;

    dataService.getPosts(userid)
      .then((resp) => {
        this.posts = resp.data;
        this.posts.forEach((p) => {
          dataService.getComments(p.id)
          .then(r => {
            p.comments = r.data;
            p.commentsCount = r.data.length;
          }, () => {
            console.error('Error fetching data');
          });
        });
      }, () => {
        console.error('Error fetching data');
      });
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
