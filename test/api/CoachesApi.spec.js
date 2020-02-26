/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.3
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
    instance = new cfb.CoachesApi();
  });

  describe('(package)', function() {
    describe('CoachesApi', function() {
      describe('getCoaches', function() {
        it('should call getCoaches successfully', function(done) {
          // TODO: uncomment, update parameter values for getCoaches call and complete the assertions
          /*
          var opts = {};
          opts.firstName = "firstName_example";
          opts.lastName = "lastName_example";
          opts.team = "team_example";
          opts.year = 56;
          opts.minYear = 56;
          opts.maxYear = 56;

          instance.getCoaches(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(cfb.InlineResponse200);
            expect(data.firstName).to.be.a('string');
            // expect(data.firstName).to.be("");
            expect(data.lastName).to.be.a('string');
            // expect(data.lastName).to.be("");
            {
              let dataCtr = data.seasons;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(cfb.TeamSeason);
                expect(data.school).to.be.a('string');
                // expect(data.school).to.be("");
                expect(data.year).to.be.a('string');
                // expect(data.year).to.be("");
                expect(data.games).to.be.a('number');
                // expect(data.games).to.be(0);
                expect(data.wins).to.be.a('number');
                // expect(data.wins).to.be(0);
                expect(data.losses).to.be.a('number');
                // expect(data.losses).to.be(0);
                expect(data.ties).to.be.a('number');
                // expect(data.ties).to.be(0);
                expect(data.preseasonRank).to.be.a('number');
                // expect(data.preseasonRank).to.be(0);
                expect(data.postseasonRank).to.be.a('number');
                // expect(data.postseasonRank).to.be(0);
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
