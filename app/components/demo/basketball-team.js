class BasketballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the basketball team entered');
    }

}

const BasketballTeam = {
    bindings: {
        team: '='
    },
    template: '<div>Basketball Team: {{$ctrl.team}}</div>',
    controller: BasketballTeamController
}

export default ngModule => {
  ngModule.component('basketballTeam',  BasketballTeam);
}
