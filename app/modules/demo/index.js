import favoriteTeams from './components/favorite-teams';
import footballTeam from './components/football-team';
import basketballTeam from './components/basketball-team';
import baseballTeam from './components/baseball-team';

export default angular.module('app.demo', [])
  .component('favoriteTeams', favoriteTeams)
  .component('footballTeam', footballTeam)
  .component('basketballTeam', basketballTeam)
  .component('baseballTeam', baseballTeam);
