class FootballTeamController {
    constructor ($log) {
      this.$logService = $log;
    }

    $onInit() {
      this.$logService.info('This component displays the football team entered');
    }
}

export default {
    bindings: {
        team: '='
    },
    template: '<div> Football Team: {{$ctrl.team}}</div>',
    controller: FootballTeamController
}