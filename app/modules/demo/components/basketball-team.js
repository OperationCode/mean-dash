class BasketballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the basketball team entered');
    }
}

export default {
    bindings: {
        team: '='
    },
    template: '<div>Basketball Team: {{$ctrl.team}}</div>',
    controller: BasketballTeamController
}
