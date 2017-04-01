import AutoSaveFormDirective from './directives/auto-save-form.directive';
import AutoSaveItemDirective from './directives/auto-save-item.directive';

angular.module('app.autoSave', [])
	.directive('AutoSaveForm', AutoSaveFormDirective)
	.directive('AutoSaveItem', AutoSaveItemDirective);
