export default function AutoSaveItemDirective ($timeout) {
	var INDEX = 0;

	return {
		restrict: 'A',
		require: ['ngModel', '^opcAutoSaveForm'],
		link: function ($scope, $el, $attr, ctrls) {
			var ngModel = ctrls[0],
				autoSaveForm = ctrls[1];
			console.log('autoSaveForm', autoSaveForm);
			var num = INDEX++;
			var doc = $scope.$eval($attr.opcAutoSave);
			if (doc) {
				autoSaveForm.add(doc);
			}
			function log () {
				return console.log.apply(console, ['opcAutoSave#' + num, doc && doc.type, $attr.ngModel].concat([].slice.call(arguments)));
			}
			var $spinner = $('<i class="fa fa-fw fa-spinner fa-spin opc-auto-save-spinner"></i>'),
				$error = $('<i class="fa fa-fw fa-warning opc-auto-save-error" style="color:#f00;"></i>'),
				$complete = $(`<i class="fa fa-fw fa-check opc-auto-save-complete" style="color:green;"></i>`),
				$indicators = $('<span class="opc-auto-save-indicators"></span>');

			$indicators.append($spinner);
			$indicators.append($complete);
			$indicators.append($error);
			$el.after($indicators);
			log('link', ngModel);

			$scope.$watch($attr.opcAutoSave, function (_doc) {
				if (doc) {
					autoSaveForm.remove(doc);
				}
				doc = _doc;
				if (doc) {
					autoSaveForm.add(doc);
				}
			});


			var delay = 2000;
			$attr.$observe('delay', function (v) {
				delay = +v || 2000;
			});


			var completeTimeout = null;


			function doSave (doc) {
				if (ngModel.$pristine) {
					// if nothing has changed, don't do anything.
					console.log('opcAutoSave $pristine');
					return;
				}
				if (ngModel.$invalid) {
					// we can't save while the doc is invalid.  cancel any pending save ops
					autoSaveForm.cancel(doc);
					return;
				}
				autoSaveForm.clearError(doc);
				$indicators.addClass('auto-saving');
				$indicators.removeClass('auto-save-error');
				$indicators.removeClass('auto-save-complete');
				autoSaveForm
					.save(doc, delay)
					.then(() => {
						$indicators.addClass('auto-save-complete');
						if (completeTimeout !== null) {
							clearTimeout(completeTimeout);
						}
						completeTimeout = $timeout(() => {
							$indicators.removeClass('auto-save-complete');
							autoSaveForm.clearRecent(doc);
							completeTimeout = null;
						}, 3000);
					})
					.catch(err => {
						autoSaveForm.addError(doc, err);
						$error.attr('title', err && err.message);
						$indicators.addClass('auto-save-error');
					})
					.finally(function () {
						$indicators.removeClass('auto-saving');
					});
			}

			var watchPath = $attr.ngModel;
			if ('watchId' in $attr) {
				watchPath += '._id';
			}
			// if ($attr.uiSelect2) {
				// watchPath += '._id';
			// }
			// console.log('opcAutoSave ATTRS', $attr);
			$scope.$on('$destroy', function () {
				autoSaveForm.remove(doc);
			});

			$scope.$watch(watchPath, function (v, o) {
				if ($attr.type === 'radio' && $attr.value !== v) {
					return;
				}
				console.log(v, o);

				if (!doc) {
					return;
				}
				doSave(doc);
			});
		}
	};
}
