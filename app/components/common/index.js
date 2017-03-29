import UserService from './services/user.service'
import UserModel from './models/user.model'

let CommonModule = angular.module('appCommon', [])
  .component('UserService', UserService)
  .component('UserModel', UserModel)

export default CommonModule
