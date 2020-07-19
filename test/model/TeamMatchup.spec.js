/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.4
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
    describe('TeamMatchup', function() {
      beforeEach(function() {
        instance = new cfb.TeamMatchup();
      });

      it('should create an instance of TeamMatchup', function() {
        // TODO: update the code to test TeamMatchup
        expect(instance).to.be.a(cfb.TeamMatchup);
      });

      it('should have the property team1 (base name: "team1")', function() {
        // TODO: update the code to test the property team1
        expect(instance).to.have.property('team1');
        // expect(instance.team1).to.be(expectedValueLiteral);
      });

      it('should have the property team2 (base name: "team2")', function() {
        // TODO: update the code to test the property team2
        expect(instance).to.have.property('team2');
        // expect(instance.team2).to.be(expectedValueLiteral);
      });

      it('should have the property startYear (base name: "startYear")', function() {
        // TODO: update the code to test the property startYear
        expect(instance).to.have.property('startYear');
        // expect(instance.startYear).to.be(expectedValueLiteral);
      });

      it('should have the property endYear (base name: "endYear")', function() {
        // TODO: update the code to test the property endYear
        expect(instance).to.have.property('endYear');
        // expect(instance.endYear).to.be(expectedValueLiteral);
      });

      it('should have the property team1Wins (base name: "team1Wins")', function() {
        // TODO: update the code to test the property team1Wins
        expect(instance).to.have.property('team1Wins');
        // expect(instance.team1Wins).to.be(expectedValueLiteral);
      });

      it('should have the property team2Wins (base name: "team2Wins")', function() {
        // TODO: update the code to test the property team2Wins
        expect(instance).to.have.property('team2Wins');
        // expect(instance.team2Wins).to.be(expectedValueLiteral);
      });

      it('should have the property ties (base name: "ties")', function() {
        // TODO: update the code to test the property ties
        expect(instance).to.have.property('ties');
        // expect(instance.ties).to.be(expectedValueLiteral);
      });

      it('should have the property games (base name: "games")', function() {
        // TODO: update the code to test the property games
        expect(instance).to.have.property('games');
        // expect(instance.games).to.be(expectedValueLiteral);
      });

    });
  });

}));
