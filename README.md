# cfb.js

cfb - JavaScript client for cfb.js
This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.1
- Package version: 2.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cfb.js --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/cfb.js
then install it via:

```shell
    npm install YOUR_USERNAME/cfb.js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var cfb = require('cfb.js');

var api = new cfb.BettingApi()

var opts = { 
  'gameId': 56, // {Number} Game id filter
  'year': 56, // {Number} Year/season filter for games
  'week': 56, // {Number} Week filter
  'seasonType': "regular", // {String} Season type filter (regular or postseason)
  'team': "team_example", // {String} Team
  'home': "home_example", // {String} Home team filter
  'away': "away_example", // {String} Away team filter
  'conference': "conference_example" // {String} Conference abbreviation filter
};
api.getLines(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.collegefootballdata.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*cfb.BettingApi* | [**getLines**](docs/BettingApi.md#getLines) | **GET** /lines | Get betting line information
*cfb.CoachesApi* | [**getCoaches**](docs/CoachesApi.md#getCoaches) | **GET** /coaches | Get coach records and school history
*cfb.ConferencesApi* | [**getConferences**](docs/ConferencesApi.md#getConferences) | **GET** /conferences | Get conference list
*cfb.DrivesApi* | [**getDrvies**](docs/DrivesApi.md#getDrvies) | **GET** /drives | Get drive information
*cfb.GamesApi* | [**getAdvancedBoxScore**](docs/GamesApi.md#getAdvancedBoxScore) | **GET** /game/box/advanced | Get advanced box score
*cfb.GamesApi* | [**getGameMedia**](docs/GamesApi.md#getGameMedia) | **GET** /games/media | Get game media information (TV, radio, etc)
*cfb.GamesApi* | [**getGames**](docs/GamesApi.md#getGames) | **GET** /games | Get game information
*cfb.GamesApi* | [**getPlayerGameStats**](docs/GamesApi.md#getPlayerGameStats) | **GET** /games/players | Get player statistics by game
*cfb.GamesApi* | [**getTeamGameStats**](docs/GamesApi.md#getTeamGameStats) | **GET** /games/teams | Get team statistics by game
*cfb.GamesApi* | [**getTeamRecords**](docs/GamesApi.md#getTeamRecords) | **GET** /records | Get records by year
*cfb.MetricsApi* | [**getGamePPA**](docs/MetricsApi.md#getGamePPA) | **GET** /ppa/games | Get team game averages for Predicted Points Added (PPA)
*cfb.MetricsApi* | [**getPlayerGamePPA**](docs/MetricsApi.md#getPlayerGamePPA) | **GET** /ppa/players/games | Get player game averages for Predicted Points Added (PPA)
*cfb.MetricsApi* | [**getPlayerSeasonPPA**](docs/MetricsApi.md#getPlayerSeasonPPA) | **GET** /ppa/players/season | Get player season averages for Predicted Points Added (PPA)
*cfb.MetricsApi* | [**getPredictedPoints**](docs/MetricsApi.md#getPredictedPoints) | **GET** /ppa/predicted | Calculate Predicted Points
*cfb.MetricsApi* | [**getPregameWinProbabilities**](docs/MetricsApi.md#getPregameWinProbabilities) | **GET** /metrics/wp/pregame | Get pregame win probabilities
*cfb.MetricsApi* | [**getTeamPPA**](docs/MetricsApi.md#getTeamPPA) | **GET** /ppa/teams | Get team averages for Predicted Points Added (PPA)
*cfb.MetricsApi* | [**getWinProbabilityData**](docs/MetricsApi.md#getWinProbabilityData) | **GET** /metrics/wp | Get win probability chart data
*cfb.PlayersApi* | [**getPlayerUsage**](docs/PlayersApi.md#getPlayerUsage) | **GET** /player/usage | Get player usage metrics for the season
*cfb.PlayersApi* | [**getReturningProduction**](docs/PlayersApi.md#getReturningProduction) | **GET** /player/returning | Get returning production metrics
*cfb.PlayersApi* | [**playerSearch**](docs/PlayersApi.md#playerSearch) | **GET** /player/search | Search for players
*cfb.PlaysApi* | [**getPlayStatTypes**](docs/PlaysApi.md#getPlayStatTypes) | **GET** /play/stat/types | Get play stat type lists
*cfb.PlaysApi* | [**getPlayStats**](docs/PlaysApi.md#getPlayStats) | **GET** /play/stats | Get play statistics
*cfb.PlaysApi* | [**getPlayTypes**](docs/PlaysApi.md#getPlayTypes) | **GET** /play/types | Get play type list
*cfb.PlaysApi* | [**getPlays**](docs/PlaysApi.md#getPlays) | **GET** /plays | Get play information. Requires either a week or team to be specified.
*cfb.RankingsApi* | [**getRankings**](docs/RankingsApi.md#getRankings) | **GET** /rankings | Get historical rankings and polls
*cfb.RatingsApi* | [**getConferenceSPRatings**](docs/RatingsApi.md#getConferenceSPRatings) | **GET** /ratings/sp/conferences | Get average SP+ historical rating data by conference
*cfb.RatingsApi* | [**getSPRatings**](docs/RatingsApi.md#getSPRatings) | **GET** /ratings/sp | Get SP+ historical rating data (requires either a year or team specified)
*cfb.RatingsApi* | [**getSRSRatings**](docs/RatingsApi.md#getSRSRatings) | **GET** /ratings/srs | Get SRS historical rating data (requires either a year or team specified)
*cfb.RecruitingApi* | [**getRecruitingGroups**](docs/RecruitingApi.md#getRecruitingGroups) | **GET** /recruiting/groups | Get position group aggregated ratings
*cfb.RecruitingApi* | [**getRecruitingPlayers**](docs/RecruitingApi.md#getRecruitingPlayers) | **GET** /recruiting/players | Get player recruiting rankings and data. Requires either a year or team to be specified.
*cfb.RecruitingApi* | [**getRecruitingTeams**](docs/RecruitingApi.md#getRecruitingTeams) | **GET** /recruiting/teams | Get team recruiting rankings
*cfb.StatsApi* | [**getAdvancedTeamGameStats**](docs/StatsApi.md#getAdvancedTeamGameStats) | **GET** /stats/game/advanced | Get advanced game team stats
*cfb.StatsApi* | [**getAdvancedTeamSeasonStats**](docs/StatsApi.md#getAdvancedTeamSeasonStats) | **GET** /stats/season/advanced | Get advanced season team stats
*cfb.StatsApi* | [**getStatCategories**](docs/StatsApi.md#getStatCategories) | **GET** /stats/categories | Get stat category list
*cfb.StatsApi* | [**getTeamSeasonStats**](docs/StatsApi.md#getTeamSeasonStats) | **GET** /stats/season | Get season team stats
*cfb.TeamsApi* | [**getFbsTeams**](docs/TeamsApi.md#getFbsTeams) | **GET** /teams/fbs | Get list of major division teams for a given year
*cfb.TeamsApi* | [**getRoster**](docs/TeamsApi.md#getRoster) | **GET** /roster | Get team roster
*cfb.TeamsApi* | [**getTalent**](docs/TeamsApi.md#getTalent) | **GET** /talent | Get team talent rankings
*cfb.TeamsApi* | [**getTeamMatchup**](docs/TeamsApi.md#getTeamMatchup) | **GET** /teams/matchup | Get matchup history
*cfb.TeamsApi* | [**getTeams**](docs/TeamsApi.md#getTeams) | **GET** /teams | Get team information
*cfb.VenuesApi* | [**getVenues**](docs/VenuesApi.md#getVenues) | **GET** /venues | Get venue information


## Documentation for Models

 - [cfb.AdvancedGameStat](docs/AdvancedGameStat.md)
 - [cfb.AdvancedGameStatOffense](docs/AdvancedGameStatOffense.md)
 - [cfb.AdvancedGameStatOffenseRushingPlays](docs/AdvancedGameStatOffenseRushingPlays.md)
 - [cfb.AdvancedGameStatOffenseStandardDowns](docs/AdvancedGameStatOffenseStandardDowns.md)
 - [cfb.AdvancedSeasonStat](docs/AdvancedSeasonStat.md)
 - [cfb.AdvancedSeasonStatDefense](docs/AdvancedSeasonStatDefense.md)
 - [cfb.AdvancedSeasonStatOffense](docs/AdvancedSeasonStatOffense.md)
 - [cfb.AdvancedSeasonStatOffenseFieldPosition](docs/AdvancedSeasonStatOffenseFieldPosition.md)
 - [cfb.AdvancedSeasonStatOffenseRushingPlays](docs/AdvancedSeasonStatOffenseRushingPlays.md)
 - [cfb.AdvancedSeasonStatOffenseStandardDowns](docs/AdvancedSeasonStatOffenseStandardDowns.md)
 - [cfb.BoxScore](docs/BoxScore.md)
 - [cfb.BoxScorePlayers](docs/BoxScorePlayers.md)
 - [cfb.BoxScorePlayersAverage](docs/BoxScorePlayersAverage.md)
 - [cfb.BoxScorePlayersPpa](docs/BoxScorePlayersPpa.md)
 - [cfb.BoxScorePlayersUsage](docs/BoxScorePlayersUsage.md)
 - [cfb.BoxScoreTeams](docs/BoxScoreTeams.md)
 - [cfb.BoxScoreTeamsExplosiveness](docs/BoxScoreTeamsExplosiveness.md)
 - [cfb.BoxScoreTeamsFieldPosition](docs/BoxScoreTeamsFieldPosition.md)
 - [cfb.BoxScoreTeamsHavoc](docs/BoxScoreTeamsHavoc.md)
 - [cfb.BoxScoreTeamsOverall](docs/BoxScoreTeamsOverall.md)
 - [cfb.BoxScoreTeamsPpa](docs/BoxScoreTeamsPpa.md)
 - [cfb.BoxScoreTeamsRushing](docs/BoxScoreTeamsRushing.md)
 - [cfb.BoxScoreTeamsScoringOpportunities](docs/BoxScoreTeamsScoringOpportunities.md)
 - [cfb.BoxScoreTeamsSuccessRates](docs/BoxScoreTeamsSuccessRates.md)
 - [cfb.Conference](docs/Conference.md)
 - [cfb.ConferenceSPRating](docs/ConferenceSPRating.md)
 - [cfb.Drive](docs/Drive.md)
 - [cfb.DriveStartTime](docs/DriveStartTime.md)
 - [cfb.Game](docs/Game.md)
 - [cfb.GameLines](docs/GameLines.md)
 - [cfb.GameLinesLines](docs/GameLinesLines.md)
 - [cfb.GameMedia](docs/GameMedia.md)
 - [cfb.GamePPA](docs/GamePPA.md)
 - [cfb.GamePPAOffense](docs/GamePPAOffense.md)
 - [cfb.InlineResponse200](docs/InlineResponse200.md)
 - [cfb.Play](docs/Play.md)
 - [cfb.PlayStat](docs/PlayStat.md)
 - [cfb.PlayStatType](docs/PlayStatType.md)
 - [cfb.PlayType](docs/PlayType.md)
 - [cfb.PlayWP](docs/PlayWP.md)
 - [cfb.Player](docs/Player.md)
 - [cfb.PlayerGame](docs/PlayerGame.md)
 - [cfb.PlayerGameAthletes](docs/PlayerGameAthletes.md)
 - [cfb.PlayerGameCategories](docs/PlayerGameCategories.md)
 - [cfb.PlayerGamePPA](docs/PlayerGamePPA.md)
 - [cfb.PlayerGamePPAAveragePPA](docs/PlayerGamePPAAveragePPA.md)
 - [cfb.PlayerGameSchool](docs/PlayerGameSchool.md)
 - [cfb.PlayerGameTeams](docs/PlayerGameTeams.md)
 - [cfb.PlayerGameTypes](docs/PlayerGameTypes.md)
 - [cfb.PlayerSearchResult](docs/PlayerSearchResult.md)
 - [cfb.PlayerSeasonPPA](docs/PlayerSeasonPPA.md)
 - [cfb.PlayerSeasonPPAAveragePPA](docs/PlayerSeasonPPAAveragePPA.md)
 - [cfb.PlayerUsage](docs/PlayerUsage.md)
 - [cfb.PlayerUsageUsage](docs/PlayerUsageUsage.md)
 - [cfb.PositionGroupRecruitingRating](docs/PositionGroupRecruitingRating.md)
 - [cfb.PredictedPoints](docs/PredictedPoints.md)
 - [cfb.PregameWP](docs/PregameWP.md)
 - [cfb.RankingWeek](docs/RankingWeek.md)
 - [cfb.RankingWeekPolls](docs/RankingWeekPolls.md)
 - [cfb.RankingWeekRanks](docs/RankingWeekRanks.md)
 - [cfb.Recruit](docs/Recruit.md)
 - [cfb.ReturningProduction](docs/ReturningProduction.md)
 - [cfb.Team](docs/Team.md)
 - [cfb.TeamGame](docs/TeamGame.md)
 - [cfb.TeamGameStats](docs/TeamGameStats.md)
 - [cfb.TeamGameTeams](docs/TeamGameTeams.md)
 - [cfb.TeamMatchup](docs/TeamMatchup.md)
 - [cfb.TeamMatchupGames](docs/TeamMatchupGames.md)
 - [cfb.TeamPPA](docs/TeamPPA.md)
 - [cfb.TeamPPAOffense](docs/TeamPPAOffense.md)
 - [cfb.TeamPPAOffenseCumulative](docs/TeamPPAOffenseCumulative.md)
 - [cfb.TeamRecord](docs/TeamRecord.md)
 - [cfb.TeamRecordTotal](docs/TeamRecordTotal.md)
 - [cfb.TeamRecruitingRank](docs/TeamRecruitingRank.md)
 - [cfb.TeamSPRating](docs/TeamSPRating.md)
 - [cfb.TeamSPRatingDefense](docs/TeamSPRatingDefense.md)
 - [cfb.TeamSPRatingDefenseHavoc](docs/TeamSPRatingDefenseHavoc.md)
 - [cfb.TeamSPRatingOffense](docs/TeamSPRatingOffense.md)
 - [cfb.TeamSPRatingSpecialTeams](docs/TeamSPRatingSpecialTeams.md)
 - [cfb.TeamSRSRating](docs/TeamSRSRating.md)
 - [cfb.TeamSeason](docs/TeamSeason.md)
 - [cfb.TeamSeasonStat](docs/TeamSeasonStat.md)
 - [cfb.TeamTalent](docs/TeamTalent.md)
 - [cfb.Venue](docs/Venue.md)
 - [cfb.VenueLocation](docs/VenueLocation.md)


## Documentation for Authorization

 All endpoints do not require authorization.

