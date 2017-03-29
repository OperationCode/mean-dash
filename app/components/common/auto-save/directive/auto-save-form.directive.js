export default function AutoSaveFormDirective () {
	var ID_KEY = '__AUTO_SAVE_KEY__';
	var UNIQUE_ID = 0;
	return {
		restrict: 'A',
		controller: class AutoSaveFormCtrl {
			constructor ($scope) {
				this.saveCounter = 0;
				this.state = Object.create(null);
				this.errors = $scope.$autoSaveError = [];
				this.emit = (eventName, data) => $scope.$emit(eventName, data);
			}

			add (doc) {
				if (!(ID_KEY in doc)) {
					Object.defineProperty(doc, ID_KEY, {
						value: doc._id || ('GENERATED:' + (++UNIQUE_ID))
					});
				}
				this.state[doc[ID_KEY]] = { timer: null };
				console.log('ADDED', doc[ID_KEY]);
			}
			remove (doc) {
				delete this.state[doc[ID_KEY]];
			}
			addError (doc, err) {
				if (this.state[doc[ID_KEY]].error === err) {
					return;
				}
				this.errors.push(this.state[doc[ID_KEY]].error = err);
			}
			clearError (doc) {
				if (!this.state[doc[ID_KEY]] || !this.state[doc[ID_KEY]].error) {
					return;
				}
				this.errors.splice(this.errors.indexOf(this.state[doc[ID_KEY]].error), 1);
			}
			save (doc, delay = 2000) {
				// get the doc's save state, or initialize it without a timer.
				var docState = this.state[doc[ID_KEY]];
				if (!docState) {
					docState = this.docState[doc[ID_KEY]] = {
						timer: null
					};
				}
				if (docState.timer === null) {
					// if there is no pending save, create a new Deferred object, and emit the save start
					docState.deferred = Promise.pending();
					this.emit('auto-save.start', doc);
					this.saveCounter++;
				} else {
					// otherwise, we clear the timeout.
					clearTimeout(docState.timer);
					docState.timer = null;
					this.emit('auto-save.reset', doc);
				}
				// set a timer for the delay.
				docState.timer = setTimeout(() => {
					// allow new saves to be queued
					docState.timer = null;
					var deferred = docState.deferred;
					docState.deferred = null;
					// Promise
						// .delay(100)
					doc.save()
						.then(res => {
							docState.lastSaved = Date.now();
							deferred.resolve(res);
							return res;
						})
						.catch(deferred.reject.bind(deferred))
						.finally(() => {
							this.saveCounter--;
							this.emit('auto-save.done', doc);
						});
				}, delay);
				return docState.deferred.promise;
			}

			cancel (doc) {
				var docState = this.state[doc[ID_KEY]];
				if (docState) {
					clearTimeout(docState.timer);
				}
			}

			clearRecent (doc) {
				var docState = this.state[doc[ID_KEY]];
				if (!docState) {
					return;
				}
				docState.lastSaved = null;
			}

			isSaving () {
				return !!this.saveCounter;
			}

			recentlySaved (doc) {
				var docState = this.state[doc[ID_KEY]];
				console.log('recently saved doc', doc[ID_KEY], docState && docState.lastSaved);
				return !!(docState && docState.lastSaved);
			}
		},
		controllerAs: '$autoSaveForm',
		link ($scope, $el, $attr) {
			if ($attr.expose) {
				$scope.$eval($attr.expose + '= $autoSaveForm;');
				$scope.$on('$destroy', () => {
					var existing = $scope.$eval($attr.expose);
					if (existing === $scope.$autoSaveForm) {
						$scope.$eval($attr.expose + '= null;');
					}
				});

			}
		}
	};
}
