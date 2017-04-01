import UserService from './services/user.service'
import UserModel from './models/user.model'
import autoSave from './auto-save'

let CommonModule = angular.module('app.common', [])
  .component('UserService', UserService)
  .component('UserModel', UserModel)
  .directive('AutoSaveItem', AutoSaveItem)
  .directive('AutoSaveForm', AutoSaveForm)

export default CommonModule
