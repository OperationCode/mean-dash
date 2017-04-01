import routes from './modules/routes'
import demo from './modules/demo'

const ngModule = angular.module('app', ['app.routes', 'app.demo'])
	.run (() => {
		console.log('App is running!')
	})
