export default angular.module('app.routes', ['ngRoute']).config(['$routeProvider',  ($routeProvider) => {

	$routeProvider
		// default route, only one that currently works
		.when('/', {
			redirectTo: '/demo'
		})
		.when('/demo', {
			template: '<favorite-teams></favorite-teams>'
		})

		// these routes can be added later, paths are incorrect
		.when('/login', {
			templateUrl: '/components/account/login.html',
		})
		.when('/dash', {
			templateMap: {
				'admin': '/components/dash/admin.html',
				'provider': '/components/dash/provider.html',
				'accounts': '/components/dash/accounts.html',
				'receptionist': '/components/dash/receptionist.html',
				'client': '/components/dash/client.html'
			}
		})
		.when('/reports', {
			templateUrl: '/components/provider/patient-reports.html'
		})
		.when('/report/:reportId/edit', {
			templateUrl: '/components/report/edit/report-edit.html',
		})
		.when('/report/create', {
			templateUrl: '/components/report/edit/report-edit.html',
		})
		.when('/settings', {
			templateUrl: '/components/system/settings.html',
		})
		.when('/inbox', {
			templateUrl: '/components/message/inbox.html',
		})
		.when('/notifications', {
			templateUrl: '/components/notification/notifications.html',
		})
		.when('/timeout', {
			templateUrl: '/components/system/timeout.html',
		})
		.when('/account/:accountId/reset-password', {
			templateUrl: '/components/account/reset-password.html',
		})
		.when('/account/:accountId/activate', {
			templateUrl: '/components/account/reset-password.html',
		})
		.when('/invoices', {
			templateUrl: '/components/invoice/invoice-list.html',
		})
		.when('/files', {
			templateUrl: '/components/admin/secure-files.html',
		})
		.when('/not-found', {
			templateUrl: '/components/common/404.html',
		})
		.when('/sessions', {
			templateUrl: '/components/session/sessions.html',
		})
		.when('/voicemail', {
			templateUrl: '/components/phone/voicemail-list.html',
		})
		.when('/text-messages', {
			templateUrl: '/components/sms/sms-list.html',
		})
		.when('/calls', {
			templateUrl: '/components/phone/call-list.html',
		})
		.when('/appointments', {
			templateUrl: '/components/appointment/appointment-list.html',
		})
		.otherwise({
			redirectTo: '/not-found'
		});
}]);
