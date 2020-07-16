/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    instance = new cfb.RankingsApi();
  });

  describe('(package)', function() {
    describe('RankingsApi', function() {
      describe('getRankings', function() {
        it('should call getRankings successfully', function(done) {
          // TODO: uncomment, update parameter values for getRankings call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "regular";

          instance.getRankings(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.RankingWeek);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.seasonType).to.be.a('string');
              // expect(data.seasonType).to.be("");
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              {
                let dataCtr = data.polls;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(cfb.RankingWeekPolls);
                  expect(data.poll).to.be.a('string');
                  // expect(data.poll).to.be("");
                  {
                    let dataCtr = data.ranks;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(cfb.RankingWeekRanks);
                      expect(data.rank).to.be.a('number');
                      // expect(data.rank).to.be(0);
                      expect(data.school).to.be.a('string');
                      // expect(data.school).to.be("");
                      expect(data.conference).to.be.a('string');
                      // expect(data.conference).to.be("");
                      expect(data.firstPlaceVotes).to.be.a('number');
                      // expect(data.firstPlaceVotes).to.be(0);
                      expect(data.points).to.be.a('number');
                      // expect(data.points).to.be(0);
                    }
                  }
                }
              }
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
