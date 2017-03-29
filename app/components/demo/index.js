import registerFavoriteTeams from './favorite-teams';
import registerFootballTeam from './football-team';
import registerBasketballTeam from './basketball-team';
import registerBaseballTeam from './baseball-team';


export default ngModule => {
	registerFavoriteTeams(ngModule);
	registerFootballTeam(ngModule);
	registerBasketballTeam(ngModule);
	registerBaseballTeam(ngModule);
}
