/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 3.0.1
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
    instance = new cfb.PlayersApi();
  });

  describe('(package)', function() {
    describe('PlayersApi', function() {
      describe('getPlayerSeasonStats', function() {
        it('should call getPlayerSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerSeasonStats call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.startWeek = 56;
          opts.endWeek = 56;
          opts.seasonType = "seasonType_example";
          opts.category = "category_example";

          instance.getPlayerSeasonStats(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSeasonStat);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.playerId).to.be.a('number');
              // expect(data.playerId).to.be(0);
              expect(data.player).to.be.a('string');
              // expect(data.player).to.be("");
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.category).to.be.a('string');
              // expect(data.category).to.be("");
              expect(data.statType).to.be.a('string');
              // expect(data.statType).to.be("");
              expect(data.stat).to.be.a('number');
              // expect(data.stat).to.be();
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
      describe('getPlayerUsage', function() {
        it('should call getPlayerUsage successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerUsage call and complete the assertions
          /*
          var year = 2020;
          var opts = {};
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.excludeGarbageTime = true;

          instance.getPlayerUsage(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerUsage);
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
              expect(data.usage).to.be.a(Object);
              // expect(data.usage).to.be();
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
      describe('getReturningProduction', function() {
        it('should call getReturningProduction successfully', function(done) {
          // TODO: uncomment, update parameter values for getReturningProduction call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getReturningProduction(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.ReturningProduction);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.totalPPA).to.be.a('number');
              // expect(data.totalPPA).to.be();
              expect(data.totalPassingPPA).to.be.a('number');
              // expect(data.totalPassingPPA).to.be();
              expect(data.totalReceivingPPA).to.be.a('number');
              // expect(data.totalReceivingPPA).to.be();
              expect(data.totalRushingPPA).to.be.a('number');
              // expect(data.totalRushingPPA).to.be();
              expect(data.percentPPA).to.be.a('number');
              // expect(data.percentPPA).to.be();
              expect(data.percentPassingPPA).to.be.a('number');
              // expect(data.percentPassingPPA).to.be();
              expect(data.percentReceivingPPA).to.be.a('number');
              // expect(data.percentReceivingPPA).to.be();
              expect(data.percentRushingPPA).to.be.a('number');
              // expect(data.percentRushingPPA).to.be();
              expect(data.usage).to.be.a('number');
              // expect(data.usage).to.be();
              expect(data.passingUsage).to.be.a('number');
              // expect(data.passingUsage).to.be();
              expect(data.receivingUsage).to.be.a('number');
              // expect(data.receivingUsage).to.be();
              expect(data.rushingUsage).to.be.a('number');
              // expect(data.rushingUsage).to.be();
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
      describe('playerSearch', function() {
        it('should call playerSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for playerSearch call and complete the assertions
          /*
          var searchTerm = "searchTerm_example";
          var opts = {};
          opts.position = "position_example";
          opts.team = "team_example";
          opts.year = 56;

          instance.playerSearch(searchTerm, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSearchResult);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
              expect(data.firstName).to.be.a('string');
              // expect(data.firstName).to.be("");
              expect(data.lastName).to.be.a('string');
              // expect(data.lastName).to.be("");
              expect(data.weight).to.be.a('number');
              // expect(data.weight).to.be(0);
              expect(data.height).to.be.a('number');
              // expect(data.height).to.be(0);
              expect(data.jersey).to.be.a('number');
              // expect(data.jersey).to.be(0);
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.hometown).to.be.a('string');
              // expect(data.hometown).to.be("");
              expect(data.teamColor).to.be.a('string');
              // expect(data.teamColor).to.be("");
              expect(data.teamColorSecondary).to.be.a('string');
              // expect(data.teamColorSecondary).to.be("");
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
