/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.2.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.cfb);
  }
}(this, function(expect, cfb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new cfb.MetricsApi();
  });

  describe('(package)', function() {
    describe('MetricsApi', function() {
      describe('getGamePPA', function() {
        it('should call getGamePPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getGamePPA call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.excludeGarbageTime = true;
          opts.seasonType = "regular";

          instance.getGamePPA(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.GamePPA);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.opponnent).to.be.a('string');
              // expect(data.opponnent).to.be("");
              expect(data.offense).to.be.a(Object);
              // expect(data.offense).to.be();
              expect(data.defense).to.be.a(Object);
              // expect(data.defense).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPlayerGamePPA', function() {
        it('should call getPlayerGamePPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerGamePPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.threshold = "threshold_example";
          opts.excludeGarbageTime = true;
          opts.seasonType = "regular";

          instance.getPlayerGamePPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerGamePPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.opponent).to.be.a('string');
              // expect(data.opponent).to.be("");
              expect(data.averagePPA).to.be.a(Object);
              // expect(data.averagePPA).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPlayerSeasonPPA', function() {
        it('should call getPlayerSeasonPPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerSeasonPPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.threshold = "threshold_example";
          opts.excludeGarbageTime = true;

          instance.getPlayerSeasonPPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSeasonPPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.averagePPA).to.be.a(Object);
              // expect(data.averagePPA).to.be();
              expect(data.totalPPA).to.be.a(Object);
              // expect(data.totalPPA).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPredictedPoints', function() {
        it('should call getPredictedPoints successfully', function(done) {
          // TODO: uncomment, update parameter values for getPredictedPoints call and complete the assertions
          /*
          var down = 56;
          var distance = 56;

          instance.getPredictedPoints(down, distance).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PredictedPoints);
              expect(data.yardLine).to.be.a('number');
              // expect(data.yardLine).to.be(0);
              expect(data.predictedPoints).to.be.a('number');
              // expect(data.predictedPoints).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPregameWinProbabilities', function() {
        it('should call getPregameWinProbabilities successfully', function(done) {
          // TODO: uncomment, update parameter values for getPregameWinProbabilities call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.seasonType = "seasonType_example";

          instance.getPregameWinProbabilities(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PregameWP);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.seasonType).to.be.a('string');
              // expect(data.seasonType).to.be("");
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.gameId).to.be.a('number');
              // expect(data.gameId).to.be(0);
              expect(data.homeTeam).to.be.a('string');
              // expect(data.homeTeam).to.be("");
              expect(data.awayTeam).to.be.a('string');
              // expect(data.awayTeam).to.be("");
              expect(data.spread).to.be.a('number');
              // expect(data.spread).to.be();
              expect(data.homeWinProb).to.be.a('number');
              // expect(data.homeWinProb).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTeamPPA', function() {
        it('should call getTeamPPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamPPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.excludeGarbageTime = true;

          instance.getTeamPPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamPPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.offense).to.be.a(Object);
              // expect(data.offense).to.be();
              expect(data.defense).to.be.a(Object);
              // expect(data.defense).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWinProbabilityData', function() {
        it('should call getWinProbabilityData successfully', function(done) {
          // TODO: uncomment, update parameter values for getWinProbabilityData call and complete the assertions
          /*
          var gameId = 56;

          instance.getWinProbabilityData(gameId).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayWP);
              expect(data.gamesId).to.be.a('number');
              // expect(data.gamesId).to.be(0);
              expect(data.playId).to.be.a('number');
              // expect(data.playId).to.be(0);
              expect(data.playText).to.be.a('string');
              // expect(data.playText).to.be("");
              expect(data.homeId).to.be.a('number');
              // expect(data.homeId).to.be(0);
              expect(data.home).to.be.a('string');
              // expect(data.home).to.be("");
              expect(data.awayId).to.be.a('number');
              // expect(data.awayId).to.be(0);
              expect(data.away).to.be.a('string');
              // expect(data.away).to.be("");
              expect(data.spread).to.be.a('number');
              // expect(data.spread).to.be();
              expect(data.homeBall).to.be.a('boolean');
              // expect(data.homeBall).to.be(false);
              expect(data.homeScore).to.be.a('number');
              // expect(data.homeScore).to.be(0);
              expect(data.awayScore).to.be.a('number');
              // expect(data.awayScore).to.be(0);
              expect(data.timeRemaining).to.be.a('number');
              // expect(data.timeRemaining).to.be(0);
              expect(data.yardLine).to.be.a('number');
              // expect(data.yardLine).to.be(0);
              expect(data.down).to.be.a('number');
              // expect(data.down).to.be(0);
              expect(data.distance).to.be.a('number');
              // expect(data.distance).to.be(0);
              expect(data.homeWinProb).to.be.a('number');
              // expect(data.homeWinProb).to.be();
              expect(data.playNumber).to.be.a('number');
              // expect(data.playNumber).to.be(0);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
