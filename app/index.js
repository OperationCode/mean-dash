/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/
import angular from 'angular'
import HomeController from './controllers/home.ctrl'
import UserService from './services/user.service'
import CommonModule from './common/common'

angular.module('app', [])
	.controller('HomeController', HomeController)
	.service('UserService', UserService)
