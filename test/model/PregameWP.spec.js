/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.9
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

  describe('(package)', function() {
    describe('PregameWP', function() {
      beforeEach(function() {
        instance = new cfb.PregameWP();
      });

      it('should create an instance of PregameWP', function() {
        // TODO: update the code to test PregameWP
        expect(instance).to.be.a(cfb.PregameWP);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property seasonType (base name: "seasonType")', function() {
        // TODO: update the code to test the property seasonType
        expect(instance).to.have.property('seasonType');
        // expect(instance.seasonType).to.be(expectedValueLiteral);
      });

      it('should have the property week (base name: "week")', function() {
        // TODO: update the code to test the property week
        expect(instance).to.have.property('week');
        // expect(instance.week).to.be(expectedValueLiteral);
      });

      it('should have the property gameId (base name: "gameId")', function() {
        // TODO: update the code to test the property gameId
        expect(instance).to.have.property('gameId');
        // expect(instance.gameId).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "homeTeam")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeam (base name: "awayTeam")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property spread (base name: "spread")', function() {
        // TODO: update the code to test the property spread
        expect(instance).to.have.property('spread');
        // expect(instance.spread).to.be(expectedValueLiteral);
      });

      it('should have the property homeWinProb (base name: "homeWinProb")', function() {
        // TODO: update the code to test the property homeWinProb
        expect(instance).to.have.property('homeWinProb');
        // expect(instance.homeWinProb).to.be(expectedValueLiteral);
      });

    });
  });

}));
