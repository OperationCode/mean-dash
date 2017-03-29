import CommonModule from './common'
import registerFavoriteTeams from './demo'
var appDependencies = [
	'ngRoute',
	'ngSanitize',
	'ui.bootstrap',
  'ngMaterial'
];

var opcDependencies = require('./ng-deps')

var app = angular.module('app', appDependencies.concat(opcDependencies))

const ngModule = angular.module('app', [])
	.component('commonModule', CommonModule)
	.run (() => {
		console.log('App is running!')
	})
