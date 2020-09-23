# cfb.js

cfb - JavaScript client for cfb.js
This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.2.14
- Package version: 2.2.14
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
*cfb.BettingApi* | [**getLines**](docs/BettingApi.md#getLines) | **GET** /lines | Betting lines
*cfb.CoachesApi* | [**getCoaches**](docs/CoachesApi.md#getCoaches) | **GET** /coaches | Coaching records and history
*cfb.ConferencesApi* | [**getConferences**](docs/ConferencesApi.md#getConferences) | **GET** /conferences | Conferences
*cfb.DrivesApi* | [**getDrvies**](docs/DrivesApi.md#getDrvies) | **GET** /drives | Drive data and results
*cfb.GamesApi* | [**getAdvancedBoxScore**](docs/GamesApi.md#getAdvancedBoxScore) | **GET** /game/box/advanced | Advanced box scores
*cfb.GamesApi* | [**getGameMedia**](docs/GamesApi.md#getGameMedia) | **GET** /games/media | Game media information and schedules
*cfb.GamesApi* | [**getGames**](docs/GamesApi.md#getGames) | **GET** /games | Games and results
*cfb.GamesApi* | [**getPlayerGameStats**](docs/GamesApi.md#getPlayerGameStats) | **GET** /games/players | Player game stats
*cfb.GamesApi* | [**getTeamGameStats**](docs/GamesApi.md#getTeamGameStats) | **GET** /games/teams | Team game stats
*cfb.GamesApi* | [**getTeamRecords**](docs/GamesApi.md#getTeamRecords) | **GET** /records | Team records
*cfb.MetricsApi* | [**getGamePPA**](docs/MetricsApi.md#getGamePPA) | **GET** /ppa/games | Team Predicated Points Added (PPA/EPA) by game
*cfb.MetricsApi* | [**getPlayerGamePPA**](docs/MetricsApi.md#getPlayerGamePPA) | **GET** /ppa/players/games | Player Predicated Points Added (PPA/EPA) broken down by game
*cfb.MetricsApi* | [**getPlayerSeasonPPA**](docs/MetricsApi.md#getPlayerSeasonPPA) | **GET** /ppa/players/season | Player Predicated Points Added (PPA/EPA) broken down by season
*cfb.MetricsApi* | [**getPredictedPoints**](docs/MetricsApi.md#getPredictedPoints) | **GET** /ppa/predicted | Predicted Points (i.e. Expected Points or EP)
*cfb.MetricsApi* | [**getPregameWinProbabilities**](docs/MetricsApi.md#getPregameWinProbabilities) | **GET** /metrics/wp/pregame | Pregame win probability data
*cfb.MetricsApi* | [**getTeamPPA**](docs/MetricsApi.md#getTeamPPA) | **GET** /ppa/teams | Predicted Points Added (PPA/EPA) data by team
*cfb.MetricsApi* | [**getWinProbabilityData**](docs/MetricsApi.md#getWinProbabilityData) | **GET** /metrics/wp | Win probability chart data
*cfb.PlayersApi* | [**getPlayerSeasonStats**](docs/PlayersApi.md#getPlayerSeasonStats) | **GET** /stats/player/season | Player stats by season
*cfb.PlayersApi* | [**getPlayerUsage**](docs/PlayersApi.md#getPlayerUsage) | **GET** /player/usage | Player usage metrics broken down by season
*cfb.PlayersApi* | [**getReturningProduction**](docs/PlayersApi.md#getReturningProduction) | **GET** /player/returning | Team returning production metrics
*cfb.PlayersApi* | [**playerSearch**](docs/PlayersApi.md#playerSearch) | **GET** /player/search | Search for player information
*cfb.PlaysApi* | [**getPlayStatTypes**](docs/PlaysApi.md#getPlayStatTypes) | **GET** /play/stat/types | Types of player play stats
*cfb.PlaysApi* | [**getPlayStats**](docs/PlaysApi.md#getPlayStats) | **GET** /play/stats | Play stats by play
*cfb.PlaysApi* | [**getPlayTypes**](docs/PlaysApi.md#getPlayTypes) | **GET** /play/types | Play types
*cfb.PlaysApi* | [**getPlays**](docs/PlaysApi.md#getPlays) | **GET** /plays | Play by play data
*cfb.RankingsApi* | [**getRankings**](docs/RankingsApi.md#getRankings) | **GET** /rankings | Historical polls and rankings
*cfb.RatingsApi* | [**getConferenceSPRatings**](docs/RatingsApi.md#getConferenceSPRatings) | **GET** /ratings/sp/conferences | Historical SP+ ratings by conference
*cfb.RatingsApi* | [**getSPRatings**](docs/RatingsApi.md#getSPRatings) | **GET** /ratings/sp | Historical SP+ ratings
*cfb.RatingsApi* | [**getSRSRatings**](docs/RatingsApi.md#getSRSRatings) | **GET** /ratings/srs | Historical SRS ratings
*cfb.RecruitingApi* | [**getRecruitingGroups**](docs/RecruitingApi.md#getRecruitingGroups) | **GET** /recruiting/groups | Recruit position group ratings
*cfb.RecruitingApi* | [**getRecruitingPlayers**](docs/RecruitingApi.md#getRecruitingPlayers) | **GET** /recruiting/players | Player recruiting ratings and rankings
*cfb.RecruitingApi* | [**getRecruitingTeams**](docs/RecruitingApi.md#getRecruitingTeams) | **GET** /recruiting/teams | Team recruiting rankings and ratings
*cfb.StatsApi* | [**getAdvancedTeamGameStats**](docs/StatsApi.md#getAdvancedTeamGameStats) | **GET** /stats/game/advanced | Advanced team metrics by game
*cfb.StatsApi* | [**getAdvancedTeamSeasonStats**](docs/StatsApi.md#getAdvancedTeamSeasonStats) | **GET** /stats/season/advanced | Advanced team metrics by season
*cfb.StatsApi* | [**getStatCategories**](docs/StatsApi.md#getStatCategories) | **GET** /stats/categories | Team stat categories
*cfb.StatsApi* | [**getTeamSeasonStats**](docs/StatsApi.md#getTeamSeasonStats) | **GET** /stats/season | Team statistics by season
*cfb.TeamsApi* | [**getFbsTeams**](docs/TeamsApi.md#getFbsTeams) | **GET** /teams/fbs | FBS team list
*cfb.TeamsApi* | [**getRoster**](docs/TeamsApi.md#getRoster) | **GET** /roster | Team rosters
*cfb.TeamsApi* | [**getTalent**](docs/TeamsApi.md#getTalent) | **GET** /talent | Team talent composite rankings
*cfb.TeamsApi* | [**getTeamMatchup**](docs/TeamsApi.md#getTeamMatchup) | **GET** /teams/matchup | Team matchup history
*cfb.TeamsApi* | [**getTeams**](docs/TeamsApi.md#getTeams) | **GET** /teams | Team information
*cfb.VenuesApi* | [**getVenues**](docs/VenuesApi.md#getVenues) | **GET** /venues | Arena and venue information


## Documentation for Models

 - [cfb.AdvancedGameStat](docs/AdvancedGameStat.md)
 - [cfb.AdvancedGameStatOffense](docs/AdvancedGameStatOffense.md)
 - [cfb.AdvancedGameStatOffenseRushingPlays](docs/AdvancedGameStatOffenseRushingPlays.md)
 - [cfb.AdvancedGameStatOffenseStandardDowns](docs/AdvancedGameStatOffenseStandardDowns.md)
 - [cfb.AdvancedSeasonStat](docs/AdvancedSeasonStat.md)
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
 - [cfb.PlayerSeasonStat](docs/PlayerSeasonStat.md)
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

