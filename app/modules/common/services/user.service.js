export default class UserService {

  constructor (UserService) {
    UserService.getuser().then(user => {
      this.user = user
    })
  }

}
