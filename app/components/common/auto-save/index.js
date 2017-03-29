import AutoSaveFormDirective from './directive/auto-save-form.directive';
import AutoSaveItemDirective from './directive/auto-save-item.directive';

angular.module('appDirectives', [])
	.directive('AutoSaveForm', AutoSaveFormDirective)
	.directive('AutoSave', AutoSaveItemDirective);
