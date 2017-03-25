/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/
//import angular from 'angular'

import CommonModule from './common/common'
import registerFavoriteTeams from './components/demo'

let ngModule = angular.module('app', ['ngMaterial', 'appCommon', 'favorite-teams'])
	.component('commonModule', CommonModule)
	.run (() => {
		console.log('App is running!')
	})
