class BaseballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the baseball team entered');
    }

}

const BaseballTeam = {
    bindings: {
        team: '='
    },
    template: '<div>Baseball Team: {{$ctrl.team}}</div>',
    controller: BaseballTeamController
}

export default ngModule => {
  ngModule.component('baseballTeam',  BaseballTeam);
}
