/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.0
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

  describe('(package)', function() {
    describe('RankingWeekRanks', function() {
      beforeEach(function() {
        instance = new cfb.RankingWeekRanks();
      });

      it('should create an instance of RankingWeekRanks', function() {
        // TODO: update the code to test RankingWeekRanks
        expect(instance).to.be.a(cfb.RankingWeekRanks);
      });

      it('should have the property rank (base name: "rank")', function() {
        // TODO: update the code to test the property rank
        expect(instance).to.have.property('rank');
        // expect(instance.rank).to.be(expectedValueLiteral);
      });

      it('should have the property school (base name: "school")', function() {
        // TODO: update the code to test the property school
        expect(instance).to.have.property('school');
        // expect(instance.school).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property firstPlaceVotes (base name: "firstPlaceVotes")', function() {
        // TODO: update the code to test the property firstPlaceVotes
        expect(instance).to.have.property('firstPlaceVotes');
        // expect(instance.firstPlaceVotes).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

    });
  });

}));
