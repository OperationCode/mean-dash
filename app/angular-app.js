import routes from './routes'
import registerDemoComponents from './components/demo';

const ngModule = angular.module('app', ['app.routes'])
	.run (() => {
		console.log('App is running!')
	});

registerDemoComponents(ngModule);