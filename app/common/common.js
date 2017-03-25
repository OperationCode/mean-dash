import angular from 'angular';
import UserModel from './models/user.model';
import TextFilters from './filters/textFilters';

const CommonModule = angular.module('common', [])
  .service('UserModel', UserModel)
  .filter('TextFilters', TextFilters);

export default CommonModule;
