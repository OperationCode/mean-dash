import UserModel from '../common/models/user.model';

export default class UserService {
	constructor($q, $log) {
		this._$q = $q;
		this.$logService = $log;
	}

	$onInit() {
		this.greeting = 'Are you ready to build on the MEAN Stack?';
		this.$logService.info('I see you are looking at the console, interesting...');
	}

	getuser() {
		return this._$q.when(new User());
	}
}
