/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
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
    instance = new cfb.StatsApi();
  });

  describe('(package)', function() {
    describe('StatsApi', function() {
      describe('getAdvancedTeamGameStats', function() {
        it('should call getAdvancedTeamGameStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdvancedTeamGameStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.opponent = "opponent_example";
          opts.excludeGarbageTime = true;
          opts.seasonType = "seasonType_example";

          instance.getAdvancedTeamGameStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.AdvancedGameStat);
              expect(data.gameId).to.be.a('number');
              expect(data.gameId).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.opponent).to.be.a('string');
              expect(data.opponent).to.be("");
              expect(data.offense).to.be.a(Object);
              expect(data.offense).to.be();
              expect(data.defense).to.be.a(Object);
              expect(data.defense).to.be();
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
      describe('getAdvancedTeamSeasonStats', function() {
        it('should call getAdvancedTeamSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdvancedTeamSeasonStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.excludeGarbageTime = true;
          opts.startWeek = 56;
          opts.endWeek = 56;

          instance.getAdvancedTeamSeasonStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.AdvancedSeasonStat);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.offense).to.be.a(Object);
              expect(data.offense).to.be();
              expect(data.defense).to.be.a(Object);
              expect(data.defense).to.be();
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
      describe('getStatCategories', function() {
        it('should call getStatCategories successfully', function(done) {
          // TODO: uncomment getStatCategories call and complete the assertions
          /*

          instance.getStatCategories().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('string');
              // expect(data).to.be(null);
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
      describe('getTeamSeasonStats', function() {
        it('should call getTeamSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamSeasonStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.startWeek = 56;
          opts.endWeek = 56;

          instance.getTeamSeasonStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamSeasonStat);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.statName).to.be.a('string');
              expect(data.statName).to.be("");
              expect(data.statValue).to.be.a('number');
              expect(data.statValue).to.be(0);
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
