import UserService from './services/user.service'
import UserModel from './models/user.model'

let CommonModule = angular.module('appCommon', [])
  .factory('UserService', UserService)
  .factory('UserModel', UserModel)

export default CommonModule
