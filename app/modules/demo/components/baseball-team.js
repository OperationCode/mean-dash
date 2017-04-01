class BaseballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the baseball team entered');
    }
}

export default {
    bindings: {
        team: '='
    },
    template: '<div>Baseball Team: {{$ctrl.team}}</div>',
    controller: BaseballTeamController
}
