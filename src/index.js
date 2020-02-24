/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient';
import {AdvancedGameStat} from './model/AdvancedGameStat';
import {AdvancedGameStatOffense} from './model/AdvancedGameStatOffense';
import {AdvancedGameStatOffenseRushingPlays} from './model/AdvancedGameStatOffenseRushingPlays';
import {AdvancedGameStatOffenseStandardDowns} from './model/AdvancedGameStatOffenseStandardDowns';
import {AdvancedSeasonStat} from './model/AdvancedSeasonStat';
import {AdvancedSeasonStatDefense} from './model/AdvancedSeasonStatDefense';
import {AdvancedSeasonStatOffense} from './model/AdvancedSeasonStatOffense';
import {AdvancedSeasonStatOffenseFieldPosition} from './model/AdvancedSeasonStatOffenseFieldPosition';
import {AdvancedSeasonStatOffenseRushingPlays} from './model/AdvancedSeasonStatOffenseRushingPlays';
import {AdvancedSeasonStatOffenseStandardDowns} from './model/AdvancedSeasonStatOffenseStandardDowns';
import {BoxScore} from './model/BoxScore';
import {BoxScorePlayers} from './model/BoxScorePlayers';
import {BoxScorePlayersAverage} from './model/BoxScorePlayersAverage';
import {BoxScorePlayersPpa} from './model/BoxScorePlayersPpa';
import {BoxScorePlayersUsage} from './model/BoxScorePlayersUsage';
import {BoxScoreTeams} from './model/BoxScoreTeams';
import {BoxScoreTeamsExplosiveness} from './model/BoxScoreTeamsExplosiveness';
import {BoxScoreTeamsFieldPosition} from './model/BoxScoreTeamsFieldPosition';
import {BoxScoreTeamsHavoc} from './model/BoxScoreTeamsHavoc';
import {BoxScoreTeamsOverall} from './model/BoxScoreTeamsOverall';
import {BoxScoreTeamsPpa} from './model/BoxScoreTeamsPpa';
import {BoxScoreTeamsRushing} from './model/BoxScoreTeamsRushing';
import {BoxScoreTeamsScoringOpportunities} from './model/BoxScoreTeamsScoringOpportunities';
import {BoxScoreTeamsSuccessRates} from './model/BoxScoreTeamsSuccessRates';
import {Conference} from './model/Conference';
import {ConferenceSPRating} from './model/ConferenceSPRating';
import {Drive} from './model/Drive';
import {DriveStartTime} from './model/DriveStartTime';
import {Game} from './model/Game';
import {GameLines} from './model/GameLines';
import {GameLinesLines} from './model/GameLinesLines';
import {GamePPA} from './model/GamePPA';
import {GamePPAOffense} from './model/GamePPAOffense';
import {InlineResponse200} from './model/InlineResponse200';
import {Play} from './model/Play';
import {PlayStat} from './model/PlayStat';
import {PlayStatType} from './model/PlayStatType';
import {PlayType} from './model/PlayType';
import {PlayWP} from './model/PlayWP';
import {Player} from './model/Player';
import {PlayerGame} from './model/PlayerGame';
import {PlayerGameAthletes} from './model/PlayerGameAthletes';
import {PlayerGameCategories} from './model/PlayerGameCategories';
import {PlayerGamePPA} from './model/PlayerGamePPA';
import {PlayerGamePPAAveragePPA} from './model/PlayerGamePPAAveragePPA';
import {PlayerGameSchool} from './model/PlayerGameSchool';
import {PlayerGameTeams} from './model/PlayerGameTeams';
import {PlayerGameTypes} from './model/PlayerGameTypes';
import {PlayerSearchResult} from './model/PlayerSearchResult';
import {PlayerSeasonPPA} from './model/PlayerSeasonPPA';
import {PlayerSeasonPPAAveragePPA} from './model/PlayerSeasonPPAAveragePPA';
import {PlayerUsage} from './model/PlayerUsage';
import {PlayerUsageUsage} from './model/PlayerUsageUsage';
import {PositionGroupRecruitingRating} from './model/PositionGroupRecruitingRating';
import {PredictedPoints} from './model/PredictedPoints';
import {PregameWP} from './model/PregameWP';
import {RankingWeek} from './model/RankingWeek';
import {RankingWeekPolls} from './model/RankingWeekPolls';
import {RankingWeekRanks} from './model/RankingWeekRanks';
import {Recruit} from './model/Recruit';
import {Team} from './model/Team';
import {TeamGame} from './model/TeamGame';
import {TeamGameStats} from './model/TeamGameStats';
import {TeamGameTeams} from './model/TeamGameTeams';
import {TeamMatchup} from './model/TeamMatchup';
import {TeamMatchupGames} from './model/TeamMatchupGames';
import {TeamPPA} from './model/TeamPPA';
import {TeamPPAOffense} from './model/TeamPPAOffense';
import {TeamPPAOffenseCumulative} from './model/TeamPPAOffenseCumulative';
import {TeamRecord} from './model/TeamRecord';
import {TeamRecordTotal} from './model/TeamRecordTotal';
import {TeamRecruitingRank} from './model/TeamRecruitingRank';
import {TeamSPRating} from './model/TeamSPRating';
import {TeamSPRatingDefense} from './model/TeamSPRatingDefense';
import {TeamSPRatingDefenseHavoc} from './model/TeamSPRatingDefenseHavoc';
import {TeamSPRatingOffense} from './model/TeamSPRatingOffense';
import {TeamSPRatingSpecialTeams} from './model/TeamSPRatingSpecialTeams';
import {TeamSRSRating} from './model/TeamSRSRating';
import {TeamSeason} from './model/TeamSeason';
import {TeamSeasonStat} from './model/TeamSeasonStat';
import {TeamTalent} from './model/TeamTalent';
import {Venue} from './model/Venue';
import {VenueLocation} from './model/VenueLocation';
import {BettingApi} from './api/BettingApi';
import {CoachesApi} from './api/CoachesApi';
import {ConferencesApi} from './api/ConferencesApi';
import {DrivesApi} from './api/DrivesApi';
import {GamesApi} from './api/GamesApi';
import {MetricsApi} from './api/MetricsApi';
import {PlayersApi} from './api/PlayersApi';
import {PlaysApi} from './api/PlaysApi';
import {RankingsApi} from './api/RankingsApi';
import {RatingsApi} from './api/RatingsApi';
import {RecruitingApi} from './api/RecruitingApi';
import {StatsApi} from './api/StatsApi';
import {TeamsApi} from './api/TeamsApi';
import {VenuesApi} from './api/VenuesApi';


/**
* This_is_an_API_for_accessing_all_sorts_of_college_football_data___It_currently_has_a_wide_array_of_data_ranging_from_play_by_play_to_player_statistics_to_game_scores_and_more_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var cfb = require('index'); // See note below*.
* var xxxSvc = new cfb.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new cfb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new cfb.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new cfb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.24.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdvancedGameStat model constructor.
     * @property {module:model/AdvancedGameStat}
     */
    AdvancedGameStat,

    /**
     * The AdvancedGameStatOffense model constructor.
     * @property {module:model/AdvancedGameStatOffense}
     */
    AdvancedGameStatOffense,

    /**
     * The AdvancedGameStatOffenseRushingPlays model constructor.
     * @property {module:model/AdvancedGameStatOffenseRushingPlays}
     */
    AdvancedGameStatOffenseRushingPlays,

    /**
     * The AdvancedGameStatOffenseStandardDowns model constructor.
     * @property {module:model/AdvancedGameStatOffenseStandardDowns}
     */
    AdvancedGameStatOffenseStandardDowns,

    /**
     * The AdvancedSeasonStat model constructor.
     * @property {module:model/AdvancedSeasonStat}
     */
    AdvancedSeasonStat,

    /**
     * The AdvancedSeasonStatDefense model constructor.
     * @property {module:model/AdvancedSeasonStatDefense}
     */
    AdvancedSeasonStatDefense,

    /**
     * The AdvancedSeasonStatOffense model constructor.
     * @property {module:model/AdvancedSeasonStatOffense}
     */
    AdvancedSeasonStatOffense,

    /**
     * The AdvancedSeasonStatOffenseFieldPosition model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseFieldPosition}
     */
    AdvancedSeasonStatOffenseFieldPosition,

    /**
     * The AdvancedSeasonStatOffenseRushingPlays model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseRushingPlays}
     */
    AdvancedSeasonStatOffenseRushingPlays,

    /**
     * The AdvancedSeasonStatOffenseStandardDowns model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseStandardDowns}
     */
    AdvancedSeasonStatOffenseStandardDowns,

    /**
     * The BoxScore model constructor.
     * @property {module:model/BoxScore}
     */
    BoxScore,

    /**
     * The BoxScorePlayers model constructor.
     * @property {module:model/BoxScorePlayers}
     */
    BoxScorePlayers,

    /**
     * The BoxScorePlayersAverage model constructor.
     * @property {module:model/BoxScorePlayersAverage}
     */
    BoxScorePlayersAverage,

    /**
     * The BoxScorePlayersPpa model constructor.
     * @property {module:model/BoxScorePlayersPpa}
     */
    BoxScorePlayersPpa,

    /**
     * The BoxScorePlayersUsage model constructor.
     * @property {module:model/BoxScorePlayersUsage}
     */
    BoxScorePlayersUsage,

    /**
     * The BoxScoreTeams model constructor.
     * @property {module:model/BoxScoreTeams}
     */
    BoxScoreTeams,

    /**
     * The BoxScoreTeamsExplosiveness model constructor.
     * @property {module:model/BoxScoreTeamsExplosiveness}
     */
    BoxScoreTeamsExplosiveness,

    /**
     * The BoxScoreTeamsFieldPosition model constructor.
     * @property {module:model/BoxScoreTeamsFieldPosition}
     */
    BoxScoreTeamsFieldPosition,

    /**
     * The BoxScoreTeamsHavoc model constructor.
     * @property {module:model/BoxScoreTeamsHavoc}
     */
    BoxScoreTeamsHavoc,

    /**
     * The BoxScoreTeamsOverall model constructor.
     * @property {module:model/BoxScoreTeamsOverall}
     */
    BoxScoreTeamsOverall,

    /**
     * The BoxScoreTeamsPpa model constructor.
     * @property {module:model/BoxScoreTeamsPpa}
     */
    BoxScoreTeamsPpa,

    /**
     * The BoxScoreTeamsRushing model constructor.
     * @property {module:model/BoxScoreTeamsRushing}
     */
    BoxScoreTeamsRushing,

    /**
     * The BoxScoreTeamsScoringOpportunities model constructor.
     * @property {module:model/BoxScoreTeamsScoringOpportunities}
     */
    BoxScoreTeamsScoringOpportunities,

    /**
     * The BoxScoreTeamsSuccessRates model constructor.
     * @property {module:model/BoxScoreTeamsSuccessRates}
     */
    BoxScoreTeamsSuccessRates,

    /**
     * The Conference model constructor.
     * @property {module:model/Conference}
     */
    Conference,

    /**
     * The ConferenceSPRating model constructor.
     * @property {module:model/ConferenceSPRating}
     */
    ConferenceSPRating,

    /**
     * The Drive model constructor.
     * @property {module:model/Drive}
     */
    Drive,

    /**
     * The DriveStartTime model constructor.
     * @property {module:model/DriveStartTime}
     */
    DriveStartTime,

    /**
     * The Game model constructor.
     * @property {module:model/Game}
     */
    Game,

    /**
     * The GameLines model constructor.
     * @property {module:model/GameLines}
     */
    GameLines,

    /**
     * The GameLinesLines model constructor.
     * @property {module:model/GameLinesLines}
     */
    GameLinesLines,

    /**
     * The GamePPA model constructor.
     * @property {module:model/GamePPA}
     */
    GamePPA,

    /**
     * The GamePPAOffense model constructor.
     * @property {module:model/GamePPAOffense}
     */
    GamePPAOffense,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Play model constructor.
     * @property {module:model/Play}
     */
    Play,

    /**
     * The PlayStat model constructor.
     * @property {module:model/PlayStat}
     */
    PlayStat,

    /**
     * The PlayStatType model constructor.
     * @property {module:model/PlayStatType}
     */
    PlayStatType,

    /**
     * The PlayType model constructor.
     * @property {module:model/PlayType}
     */
    PlayType,

    /**
     * The PlayWP model constructor.
     * @property {module:model/PlayWP}
     */
    PlayWP,

    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player,

    /**
     * The PlayerGame model constructor.
     * @property {module:model/PlayerGame}
     */
    PlayerGame,

    /**
     * The PlayerGameAthletes model constructor.
     * @property {module:model/PlayerGameAthletes}
     */
    PlayerGameAthletes,

    /**
     * The PlayerGameCategories model constructor.
     * @property {module:model/PlayerGameCategories}
     */
    PlayerGameCategories,

    /**
     * The PlayerGamePPA model constructor.
     * @property {module:model/PlayerGamePPA}
     */
    PlayerGamePPA,

    /**
     * The PlayerGamePPAAveragePPA model constructor.
     * @property {module:model/PlayerGamePPAAveragePPA}
     */
    PlayerGamePPAAveragePPA,

    /**
     * The PlayerGameSchool model constructor.
     * @property {module:model/PlayerGameSchool}
     */
    PlayerGameSchool,

    /**
     * The PlayerGameTeams model constructor.
     * @property {module:model/PlayerGameTeams}
     */
    PlayerGameTeams,

    /**
     * The PlayerGameTypes model constructor.
     * @property {module:model/PlayerGameTypes}
     */
    PlayerGameTypes,

    /**
     * The PlayerSearchResult model constructor.
     * @property {module:model/PlayerSearchResult}
     */
    PlayerSearchResult,

    /**
     * The PlayerSeasonPPA model constructor.
     * @property {module:model/PlayerSeasonPPA}
     */
    PlayerSeasonPPA,

    /**
     * The PlayerSeasonPPAAveragePPA model constructor.
     * @property {module:model/PlayerSeasonPPAAveragePPA}
     */
    PlayerSeasonPPAAveragePPA,

    /**
     * The PlayerUsage model constructor.
     * @property {module:model/PlayerUsage}
     */
    PlayerUsage,

    /**
     * The PlayerUsageUsage model constructor.
     * @property {module:model/PlayerUsageUsage}
     */
    PlayerUsageUsage,

    /**
     * The PositionGroupRecruitingRating model constructor.
     * @property {module:model/PositionGroupRecruitingRating}
     */
    PositionGroupRecruitingRating,

    /**
     * The PredictedPoints model constructor.
     * @property {module:model/PredictedPoints}
     */
    PredictedPoints,

    /**
     * The PregameWP model constructor.
     * @property {module:model/PregameWP}
     */
    PregameWP,

    /**
     * The RankingWeek model constructor.
     * @property {module:model/RankingWeek}
     */
    RankingWeek,

    /**
     * The RankingWeekPolls model constructor.
     * @property {module:model/RankingWeekPolls}
     */
    RankingWeekPolls,

    /**
     * The RankingWeekRanks model constructor.
     * @property {module:model/RankingWeekRanks}
     */
    RankingWeekRanks,

    /**
     * The Recruit model constructor.
     * @property {module:model/Recruit}
     */
    Recruit,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamGame model constructor.
     * @property {module:model/TeamGame}
     */
    TeamGame,

    /**
     * The TeamGameStats model constructor.
     * @property {module:model/TeamGameStats}
     */
    TeamGameStats,

    /**
     * The TeamGameTeams model constructor.
     * @property {module:model/TeamGameTeams}
     */
    TeamGameTeams,

    /**
     * The TeamMatchup model constructor.
     * @property {module:model/TeamMatchup}
     */
    TeamMatchup,

    /**
     * The TeamMatchupGames model constructor.
     * @property {module:model/TeamMatchupGames}
     */
    TeamMatchupGames,

    /**
     * The TeamPPA model constructor.
     * @property {module:model/TeamPPA}
     */
    TeamPPA,

    /**
     * The TeamPPAOffense model constructor.
     * @property {module:model/TeamPPAOffense}
     */
    TeamPPAOffense,

    /**
     * The TeamPPAOffenseCumulative model constructor.
     * @property {module:model/TeamPPAOffenseCumulative}
     */
    TeamPPAOffenseCumulative,

    /**
     * The TeamRecord model constructor.
     * @property {module:model/TeamRecord}
     */
    TeamRecord,

    /**
     * The TeamRecordTotal model constructor.
     * @property {module:model/TeamRecordTotal}
     */
    TeamRecordTotal,

    /**
     * The TeamRecruitingRank model constructor.
     * @property {module:model/TeamRecruitingRank}
     */
    TeamRecruitingRank,

    /**
     * The TeamSPRating model constructor.
     * @property {module:model/TeamSPRating}
     */
    TeamSPRating,

    /**
     * The TeamSPRatingDefense model constructor.
     * @property {module:model/TeamSPRatingDefense}
     */
    TeamSPRatingDefense,

    /**
     * The TeamSPRatingDefenseHavoc model constructor.
     * @property {module:model/TeamSPRatingDefenseHavoc}
     */
    TeamSPRatingDefenseHavoc,

    /**
     * The TeamSPRatingOffense model constructor.
     * @property {module:model/TeamSPRatingOffense}
     */
    TeamSPRatingOffense,

    /**
     * The TeamSPRatingSpecialTeams model constructor.
     * @property {module:model/TeamSPRatingSpecialTeams}
     */
    TeamSPRatingSpecialTeams,

    /**
     * The TeamSRSRating model constructor.
     * @property {module:model/TeamSRSRating}
     */
    TeamSRSRating,

    /**
     * The TeamSeason model constructor.
     * @property {module:model/TeamSeason}
     */
    TeamSeason,

    /**
     * The TeamSeasonStat model constructor.
     * @property {module:model/TeamSeasonStat}
     */
    TeamSeasonStat,

    /**
     * The TeamTalent model constructor.
     * @property {module:model/TeamTalent}
     */
    TeamTalent,

    /**
     * The Venue model constructor.
     * @property {module:model/Venue}
     */
    Venue,

    /**
     * The VenueLocation model constructor.
     * @property {module:model/VenueLocation}
     */
    VenueLocation,

    /**
    * The BettingApi service constructor.
    * @property {module:api/BettingApi}
    */
    BettingApi,

    /**
    * The CoachesApi service constructor.
    * @property {module:api/CoachesApi}
    */
    CoachesApi,

    /**
    * The ConferencesApi service constructor.
    * @property {module:api/ConferencesApi}
    */
    ConferencesApi,

    /**
    * The DrivesApi service constructor.
    * @property {module:api/DrivesApi}
    */
    DrivesApi,

    /**
    * The GamesApi service constructor.
    * @property {module:api/GamesApi}
    */
    GamesApi,

    /**
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The PlayersApi service constructor.
    * @property {module:api/PlayersApi}
    */
    PlayersApi,

    /**
    * The PlaysApi service constructor.
    * @property {module:api/PlaysApi}
    */
    PlaysApi,

    /**
    * The RankingsApi service constructor.
    * @property {module:api/RankingsApi}
    */
    RankingsApi,

    /**
    * The RatingsApi service constructor.
    * @property {module:api/RatingsApi}
    */
    RatingsApi,

    /**
    * The RecruitingApi service constructor.
    * @property {module:api/RecruitingApi}
    */
    RecruitingApi,

    /**
    * The StatsApi service constructor.
    * @property {module:api/StatsApi}
    */
    StatsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The VenuesApi service constructor.
    * @property {module:api/VenuesApi}
    */
    VenuesApi
};