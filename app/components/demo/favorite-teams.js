class FavoriteTeamsController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.greeting = 'Enter your three favorite sports teams for each category and click Submit';
      this.$logService.info('Enter your teams and stop looking at the console');
    }

    submit() {
      this.allTeamsWereInput = this.footballTeam && this.basketballTeam && this.baseballTeam;
    }
}

const FavoriteTeams = {
    bindings: {},
    template: require('./favorite-teams.html'),  // could also inline it, just trying this out
    controller: FavoriteTeamsController
}

export default ngModule => {
  ngModule.component('favoriteTeams',  FavoriteTeams);
}
