class FootballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the football team entered');
    }

}

const FootballTeam = {
    bindings: {
        team: '='
    },
    template: '<div>{{$ctrl.team}}</div>',
    controller: FootballTeamController
}

export default ngModule => {
  ngModule.component('footballTeam',  FootballTeam);
}
