/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _common = __webpack_require__(1);

	var _common2 = _interopRequireDefault(_common);

	var _demo = __webpack_require__(4);

	var _demo2 = _interopRequireDefault(_demo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appDependencies = ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngMaterial'];

	var opcDependencies = __webpack_require__(10);

	var app = angular.module('app', appDependencies.concat(opcDependencies));

	var ngModule = angular.module('app', []).component('commonModule', _common2.default).run(function () {
		console.log('App is running!');
	});

	(0, _demo2.default)(ngModule);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(2);

	var _user2 = _interopRequireDefault(_user);

	var _user3 = __webpack_require__(3);

	var _user4 = _interopRequireDefault(_user3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = angular.module('appCommon', []).component('UserService', _user2.default).component('UserModel', _user4.default);

	exports.default = CommonModule;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserService = function UserService(_UserService) {
	  var _this = this;

	  _classCallCheck(this, UserService);

	  _UserService.getuser().then(function (user) {
	    _this.user = user;
	  });
	};

	exports.default = UserService;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	  Model classes can be exported and imported directly (not using AngularJS' dependency injection).
	*/

	var UserModel = exports.UserModel = function () {
	  function UserModel($q, $rootScope) {
	    _classCallCheck(this, UserModel);

	    this.$q = $q;
	    this.$rootScope = $rootScope;
	    this.currentUser = null;
	    this.users = [{ 'id': 0, 'name': 'Seth' }, { 'id': 1, 'name': 'John' }, { 'id': 2, 'name': 'Walley' }];
	  }

	  _createClass(UserModel, [{
	    key: 'getUsers',
	    value: function getUsers() {
	      return this.$q.when(this.users);
	    }
	  }, {
	    key: 'setCurrentUser',
	    value: function setCurrentUser(user) {
	      this.currentUser = user;
	      this.$rootScope.$broadcast('onCurrentUserUpdated');
	    }
	  }, {
	    key: 'getCurrentUser',
	    value: function getCurrentUser() {
	      return this.currentUser;
	    }
	  }, {
	    key: 'getUser',
	    value: function getUser() {
	      return 'World';
	    }
	  }]);

	  return UserModel;
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _favoriteTeams = __webpack_require__(5);

	var _favoriteTeams2 = _interopRequireDefault(_favoriteTeams);

	var _footballTeam = __webpack_require__(7);

	var _footballTeam2 = _interopRequireDefault(_footballTeam);

	var _basketballTeam = __webpack_require__(8);

	var _basketballTeam2 = _interopRequireDefault(_basketballTeam);

	var _baseballTeam = __webpack_require__(9);

	var _baseballTeam2 = _interopRequireDefault(_baseballTeam);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (ngModule) {
		(0, _favoriteTeams2.default)(ngModule);
		(0, _footballTeam2.default)(ngModule);
		(0, _basketballTeam2.default)(ngModule);
		(0, _baseballTeam2.default)(ngModule);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FavoriteTeamsController = function () {
	    function FavoriteTeamsController($log) {
	        _classCallCheck(this, FavoriteTeamsController);

	        this.$logService = $log;
	    }

	    _createClass(FavoriteTeamsController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.greeting = 'Enter your three favorite sports teams for each category and click Submit';
	            this.$logService.info('Enter your teams and stop looking at the console');
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            this.allTeamsWereInput = this.footballTeam && this.basketballTeam && this.baseballTeam;
	        }
	    }]);

	    return FavoriteTeamsController;
	}();

	var FavoriteTeams = {
	    bindings: {},
	    template: __webpack_require__(6), // could also inline it, just trying this out
	    controller: FavoriteTeamsController
	};

	exports.default = function (ngModule) {
	    ngModule.component('favoriteTeams', FavoriteTeams);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<form class=\"favorite-teams\">\r\n  {{$ctrl.greeting}}\r\n\r\n  <div class=\"favoriteTeams-input\">Football Team <input ng-model=\"$ctrl.footballTeam\"></div>\r\n  <div class=\"favoriteTeams-input\">Baseball Team <input ng-model=\"$ctrl.baseballTeam\"></div>\r\n  <div class=\"favoriteTeams-input\">Basketball Team <input ng-model=\"$ctrl.basketballTeam\"></div>\r\n\r\n  <button ng-click=\"$ctrl.submit()\">Submit</button>\r\n\r\n  <div ng-if=\"$ctrl.allTeamsWereInput\">\r\n    YOUR TEAMS ARE:\r\n    <football-team team=\"$ctrl.footballTeam\"></football-team>\r\n    <baseball-team team=\"$ctrl.baseballTeam\"></baseball-team>\r\n    <basketball-team team=\"$ctrl.basketballTeam\"></basketball-team>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FootballTeamController = function () {
	    function FootballTeamController($log) {
	        _classCallCheck(this, FootballTeamController);

	        this.$logService = $log;
	    }

	    _createClass(FootballTeamController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$logService.info('This component displays the football team entered');
	        }
	    }]);

	    return FootballTeamController;
	}();

	var FootballTeam = {
	    bindings: {
	        team: '='
	    },
	    template: '<div>{{$ctrl.team}}</div>',
	    controller: FootballTeamController
	};

	exports.default = function (ngModule) {
	    ngModule.component('footballTeam', FootballTeam);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BasketballTeamController = function () {
	    function BasketballTeamController($log) {
	        _classCallCheck(this, BasketballTeamController);

	        this.$logService = $log;
	    }

	    _createClass(BasketballTeamController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$logService.info('This component displays the basketball team entered');
	        }
	    }]);

	    return BasketballTeamController;
	}();

	var BasketballTeam = {
	    bindings: {
	        team: '='
	    },
	    template: '<div>{{$ctrl.team}}</div>',
	    controller: BasketballTeamController
	};

	exports.default = function (ngModule) {
	    ngModule.component('basketballTeam', BasketballTeam);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseballTeamController = function () {
	    function BaseballTeamController($log) {
	        _classCallCheck(this, BaseballTeamController);

	        this.$logService = $log;
	    }

	    _createClass(BaseballTeamController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$logService.info('This component displays the baseball team entered');
	        }
	    }]);

	    return BaseballTeamController;
	}();

	var BaseballTeam = {
	    bindings: {
	        team: '='
	    },
	    template: '<div>{{$ctrl.team}}</div>',
	    controller: BaseballTeamController
	};

	exports.default = function (ngModule) {
	    ngModule.component('baseballTeam', BaseballTeam);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	module.exports = ['ng-hack.core', 'ng-hack.filter', 'ng-hack.route', 'ng-hack.ui', 'account', 'auto-save', 'demo', 'dash', 'nav', 'routes'];

/***/ }
/******/ ]);