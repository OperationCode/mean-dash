import CommonModule from './common'
import registerFavoriteTeams from './demo'
var appDependencies = [
	'ngRoute',
	'ngSanitize',
	'ui.bootstrap'
	// 'angular-redactor',
	// 'angularFileUpload',
	// 'angulartics',
	// 'cfp.hotkeys',
	// 'autoGrow'
];

var opcDependencies = require('./ng-deps');


var app = angular.module('app', appDependencies.concat(opcDependencies));

let ngModule = angular.module('app', ['ngMaterial', 'appCommon', 'favorite-teams'])
	.component('commonModule', CommonModule)
	.run (() => {
		console.log('App is running!')
	})
