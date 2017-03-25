'use strict';

angular.module('app.routes', []).config(['$routeProvider', '$analyticsProvider', function ($routeProvider, $analyticsProvider) {
	// turn off automatic tracking,
	// otherwise sends the pageview based on first parameter of $routeProvider.when()
	$analyticsProvider.virtualPageviews(false);

	$routeProvider
		.when('/', {
			redirectTo: '/login'
		})
		.when('/login', {
			templateUrl: '/components/account/login.html',
			guestOk: true,
			ga: {
				page: '/login',
				title: 'MEAN Dash Login'
			}
		})
		.when('/dash', {
			templateMap: {
				'admin': '/components/dash/admin.html',
				'provider': '/components/dash/provider.html',
				'accounts': '/components/dash/accounts.html',
				'receptionist': '/components/dash/receptionist.html',
				'client': '/components/dash/client.html'
			},
			ga: {
				page: '/dash',
				title: 'Dashboard'
			}
		})
		.when('/reports', {
			templateUrl: '/components/provider/patient-reports.html',
			ga: {
				page: '/reports',
				title: 'Reports'
			}
		})
		.when('/report/:reportId/edit', {
			templateUrl: '/components/report/edit/report-edit.html',
			ga: {
				page: '/report/edit',
				title: 'Report Edit'
			}
		})
		.when('/report/create', {
			templateUrl: '/components/report/edit/report-edit.html',
			ga: {
				page: '/report/create',
				title: 'Report Create'
			}
		})
		.when('/settings', {
			templateUrl: '/components/system/settings.html',
			ga: {
				page: '/settings',
				title: 'System Settings'
			}
		})
		.when('/inbox', {
			templateUrl: '/components/message/inbox.html',
			ga: {
				page: '/inbox',
				title: 'Inbox'
			}
		})
		.when('/notifications', {
			templateUrl: '/components/notification/notifications.html',
			ga: {
				page: '/notifications',
				title: 'Notification List'
			}
		})
		.when('/timeout', {
			templateUrl: '/components/system/timeout.html',
			guestOk: true,
			ga: {
				page: '/timeout',
				title: 'Logged Out due to inactivity'
			}
		})
		.when('/account/:accountId/reset-password', {
			templateUrl: '/components/account/reset-password.html',
			guestOk: true,
			ga: {
				page: '/accounts/reset-password',
				title: 'Reset Password'
			}
		})
		.when('/account/:accountId/activate', {
			templateUrl: '/components/account/reset-password.html',
			guestOk: true,
			ga: {
				page: '/accounts/activate',
				title: 'Activate Account'
			}
		})
		.when('/invoices', {
			templateUrl: '/components/invoice/invoice-list.html',
			guestOk: false,
			ga: {
				page: '/invoices',
				title: 'Invoice Log'
			}
		})
		.when('/files', {
			templateUrl: '/components/admin/secure-files.html',
			ga: {
				page: '/files',
				title: 'File List'
			}
		})
		.when('/not-found', {
			templateUrl: '/components/common/404.html',
			guestOk: true,
			ga: {
				page: '/not-found',
				title: 'Page Not Found'
			}
		})
		.when('/sessions', {
			templateUrl: '/components/session/sessions.html',
			ga: {
				page: '/sessions',
				title: 'Session List'
			}
		})
		.when('/voicemail', {
			templateUrl: '/components/phone/voicemail-list.html',
			ga: {
				page: '/voicemail',
				title: 'Voicemail List'
			}
		})
		.when('/text-messages', {
			templateUrl: '/components/sms/sms-list.html',
			ga: {
				page: '/text-messages',
				title: 'Text Messages'
			}
		})
		.when('/calls', {
			templateUrl: '/components/phone/call-list.html',
			ga: {
				page: '/calls',
				title: 'Calls'
			}
		})
		.when('/appointments', {
			templateUrl: '/components/appointment/appointment-list.html',
			ga: {
				page: '/appointments',
				title: 'Appointments'
			}
		})
		.otherwise({
			redirectTo: '/not-found'
		});

}]);
